## Qbox Elasticsearch Tutorial 

### Series Overview
Qbox.io - Getting started with Elasticsearch using Elasticsearch.js and
Angular.js  

#### Episode Three 
* Importing Documents
* Settings
* Analyzers 
* Unstructed Search

##### Visit http://blog.qbox.io/qbox-elasticsearch-tutorial-3 for more.

## Sense Gist
Feel free to use our sense gist to send your mapping and queries, Or ask a question on the post!
sense.qbox.io


## Settings
curl -XPUT 'localhost:9200/sports' -d '{
  "settings": {
    "analysis": {
      "filter": {
        "nGram_filter": {
          "type": "nGram",
            "min_gram": 2,
            "max_gram": 20,
            "token_chars": [
              "letter",
            "digit",
            "punctuation",
            "symbol"
              ]
        }
      },
        "analyzer": {
          "nGram_analyzer": {
            "type": "custom",
            "tokenizer": "whitespace",
            "filter": [
              "lowercase",
            "asciifolding",
            "nGram_filter"
              ]
          },
          "whitespace_analyzer": {
            "type": "custom",
            "tokenizer": "whitespace",
            "filter": [
              "lowercase",
            "asciifolding"
              ]
          }
        }
    }
  }
}'

## Mapping
curl -XPUT 'localhost:9200/sports/athlete/_mapping' -d '{
  "_all":{
    "index_analyzer": "nGram_analyzer",
      "search_analyzer": "whitespace_analyzer"
  },
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
}'

## Bulk Index Command (inside of the repository)
  After you've installed ruby v2.0.0 run

  ruby athlete-import.rb
