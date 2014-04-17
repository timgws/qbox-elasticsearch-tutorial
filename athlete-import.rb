require 'elasticsearch'
require 'json'

CLUSTER_ENDPOINT = 'localhost:9200'
INDEX_NAME = 'sports'
TYPE_NAME = 'athlete'
DATAFILE = File.read("new-sports-data.json")
PER_PAGE = 1000
TOTAL_DOCS = 4100

client = Elasticsearch::Client.new(hosts: CLUSTER_ENDPOINT)

data = JSON.parse(DATAFILE)
avg_runtime = 1

total_pages = TOTAL_DOCS / PER_PAGE
page = 1

while page <= total_pages
puts "Fetching and indexing page #{page} of #{total_pages}..."

now = Time.now

bulk_body = data.map do |doc|
  [
    { index: { _index: INDEX_NAME, _type: TYPE_NAME}},
    doc
  ]
end.flatten

bulk_resp = client.bulk(body: bulk_body)

page += 1
end
