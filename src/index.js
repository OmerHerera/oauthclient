"use strict";

var instance
    , request       = require("request")
    , OAuth         = require("oauth-1.0a")
    , objectAssign  = require("object-assign");

function create (options) {
    
    if (!instance) {
        instance = _create(options);
    }
    return instance;
}

function _create (options) {
    options = options || {};    
    
    if (!options.public || !options.secret) {
        return void 0;
    }    
    
    return objectAssign(Object.create({}), {
        oauth: OAuth({
            consumer: {
                /*jshint -W024 */
                public: options.public,
                /*jshint +W024 */
                secret: options.secret
            },
            signature_method: options.signature_method || "HMAC-SHA1"
        }),
        fetch: function (options, callback) {
            options = options || {};
            
            if (!options.url || !options.method) {
                callback(new Error("Missing one/two mandatory params, options: " + JSON.stringify(options)));
                return;
            }
            
            var requestData = {
                url: options.url,
                method: options.method
            };
                                   
            options.headers = this.oauth.toHeader(this.oauth.authorize(requestData));
            request(options, callback);
        }
    });
    
}

module.exports = {
    create: create
};