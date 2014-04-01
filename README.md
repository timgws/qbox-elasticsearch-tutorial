## Qbox Elasticsearch Tutorial 

### Series Overview

Qbox.io - Getting starting with Elasticsearch using Elasticsearch.js and Angular.js. This Epsiode #1 of a many part tutorial series from Qbox about Elasticsearch.  

#### Episode One

* Launching and configuring your local Elasticsearch cluster and node
* Bulk Indexing a dataset
* Retrieving Information from your cluster

##### Visit http://blog.qbox.io/qbox-elasticsearch-tutorial-1 for more.

##### Sense Gist
Feel free to use this sense gist to quickly run the mapping and queries.
Or make some changes, save it, and ask a question on the post!

http://sense.qbox.io/gist/fcc2cfad0eabf14ee062978bed48ccfc3d62513d


##### Bulk Index Command (inside of the repository)
curl -s -XPOST localhost:9200/_bulk --data-binary @disney-data; echo
