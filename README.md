## Elasticsearch Tutorial 

Feel free to use this sense gist to quickly run the mapping
and index all these documents onto whichever server you provide (localhost:9200 is the default)
http://sense.qbox.io/gist/67142dd7e290e8d5c50901aefb3051c35b9f12a3

If you would rather put the mapping yourself and use the bulk index api
run this mapping in your terminal. Then run the bulk api curl command below.

feel free to delete the index if you wish

curl -XDELETE "http://localhost:9200/voice_acting/"

curl -XPUT "http://localhost:9200/voice_acting/" -d'
{
  "mappings": {
    "character": {
      "properties":{
        "release_date": {"type": "date", "format": "YYYY"},
        "rating": {"type": "integer"},
        "original_voice_actor":{
            "type":"multi_field",
            "fields":{
                "original_voice_actor":{"type":"string", "index": "analyzed"},
                "untouched":{"type": "string", "index": "not_analyzed"}
            }
        }
      }
    }
  }
}'


Bulk Index Command

curl -s -XPOST localhost:9200/_bulk --data-binary @voice-actor-data; echo


## Overview

Qbox.io - Getting starting with Elasticsearch using Elasticsearch.js and Angular.js.
This project is a one of many part series including information and examples of displaying 
and searching requests from elasticsearch. Visit blog.qbox.io for more

