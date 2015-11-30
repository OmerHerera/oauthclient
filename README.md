![image](https://cloud.githubusercontent.com/assets/5514007/11457050/1828d236-96a7-11e5-8a8a-d906cc339ec5.png)
> Client OAuth 1.0a Request Authorization for Node

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://semaphoreci.com/api/v1/projects/90d69510-17be-4d6a-9fb7-8fdd8b04fb58/617490/badge.svg)](https://semaphoreci.com/omher/oauthclient)
[![Code Climate](https://codeclimate.com/github/OmerHerera/oauthclient/badges/gpa.svg)](https://codeclimate.com/github/OmerHerera/oauthclient)
[![Dependency Status](https://david-dm.org/OmerHerera/oauthclient.svg?theme=shields.io)](https://david-dm.org/OmerHerera/oauthclient)
[![devDependency Status](https://david-dm.org/OmerHerera/oauthclient/dev-status.svg?theme=shields.io)](https://david-dm.org/OmerHerera/oauthclient#info=devDependencies)
[![npm version](https://badge.fury.io/js/oauthclient.svg)](http://badge.fury.io/js/oauthclient)
[![npm downloads](https://img.shields.io/npm/dm/oauthclient.svg)](https://img.shields.io/npm/dm/oauthclient.svg)
[![NPM](https://nodei.co/npm/oauthclient.png)](https://nodei.co/npm/oauthclient/)


### Example

### API
* ```create(options)``` - creates instance, create unique instance(supports Singletone)
	*  	```public``` - public key
	*  	```secret``` - secret key
* ```fetch(request object, callback)```
	* ```request object``` - must have
		1. URL - URL to request - ```mandatory```
		2. Method - Method to use, GET/POST - ```mandatory```
		3. body - data when  using POST method - ```optonal```
		4. json - ```true/false``` - ```optional```
			* true when passing objet
			* false when passing string

	* ```callback``` - The callback argument gets 2 arguments:
		1. An error when applicable (usually from http.ClientRequest object)
		2. An http.IncomingMessage object

### Example
```
	var oauthClient = require("oauthclient").create({
            public: "asdfg2345tghj89uk9klas34d5f6g7uhj9kl",
            secret: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"
	};
	var requestObj = {
            "method": "GET",
            "url": "https:///www.domain.taht.spports.oauth1.0"
        };
        oauthClientInstance.fetch(requestObj, function (err, data) {
        	/// do somthing with err or data
        });

```
