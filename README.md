## Qbox Elasticsearch Tutorial 

### Series Overview
Qbox.io - Getting starting with Elasticsearch using Elasticsearch.js and
Angular.js. This Epsiode #2 of a many part tutorial series from Qbox
about Elasticsearch.  

#### Episode Two 
* Query DSL
* Searching Elasticsearch 
* Match queries
* Filtered Queries

##### Visit http://blog.qbox.io/qbox-elasticsearch-tutorial-2 for more.

## Sense Gist
Feel free to use this sense gist to quickly run the mapping and queries.
Or make some changes, save it, and ask a question on the post!

http://sense.qbox.io/gist/f9dab4c4479652ce261919ff3b7bd8768fc9872a#

## Settings
curl -XPUT 'localhost:9200/sports/athlete/_settings' -d '{
}'

## Mapping
curl -XPUT 'localhost:9200/sports/athlete/_mapping' -d '{
  "athlete": {
    "properties": {
      "birthdate": {
        "type": "date",
          "format": "dateOptionalTime"
      },
      "location": {
        "type": "geo_point"
      },
      "name": {
        "type": "string"
      },
      "rating": {
        "type": "integer"
      },
      "sport": {
        "type": "string",
        "index": "not_analyzed"
      }
    }
  }
}'


## Bulk Index Command (inside of the repository)
curl -s -XPUT localhost:9200/_bulk --data-binary @sports-data; echo
