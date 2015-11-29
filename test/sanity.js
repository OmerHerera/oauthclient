var expect  = require("chai").expect
    , oauthClient = require("./../src/index")
    , oauthClientInstance
    , requestObj 

describe("oauthclient", function () {
    before(function () {
        oauthClientInstance = oauthClient.create({
            public: "asdfg2345tghj89uk9klas34d5f6g7uhj9kl",
            secret: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"            
        });
    });
    after(function() {
        // runs after all tests in this block
        oauthClientInstance = void 0;
    });
    it("Sanity, check methods", function (done) {
        expect(oauthClient).to.be.a("object");
        expect(oauthClient.create).to.be.a("function");
        expect(oauthClientInstance.fetch).to.be.a("function");
        done();
    });
    it("Instance, check only one instance was created", function (done) {
        expect(oauthClientInstance).to.be.equal(oauthClientInstance);
        done();                
    });
});

describe("oauthclient Negative Tests", function () {
    after(function() {
        // runs after all tests in this block
        oauthClientInstance = void 0;
    });
    
    it("Missing all options", function (done) {
        before(function () {
            oauthClientInstance = oauthClient.createInstance();
        });
        expect(oauthClientInstance).to.be.equal(void 0);
        done();
    });
    
    it("Missing public option", function (done) {
        before(function () {
            oauthClientInstance = oauthClient.createInstance({
                secret: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"                
            });
        });
        expect(oauthClientInstance).to.be.equal(void 0);
        done();
    });
    
    it("Missing secret option", function (done) {
        before(function () {
            oauthClientInstance = oauthClient.createInstance({
                public: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"                
            });
        });
        expect(oauthClientInstance).to.be.equal(void 0);
        done();
    });    
});

describe("Sanity Request Object", function () {
    before(function () {
        oauthClientInstance = oauthClient.create({
            public: "asdfg2345tghj89uk9klas34d5f6g7uhj9kl",
            secret: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"            
        });
    });
    
    after(function() {
        // runs after all tests in this block
        oauthClientInstance = void 0;
        requestObj = void 0;
    });
    
    it("check method missing URL", function (done) {
        before(function () {
            oauthClientInstance = oauthClient.create({
                public: "asdfg2345tghj89uk9klas34d5f6g7uhj9kl",
                secret: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"
            });
        });
        
        requestObj = {
            "url": "https://domain.com"
        };
        
        oauthClientInstance.fetch(requestObj, function (err, data) {
            expect(err).to.exist;
            done();
        });
    });
    
    it("check method missing Method", function (done) {
        before(function () {
            oauthClientInstance = oauthClient.create({
                public: "asdfg2345tghj89uk9klas34d5f6g7uhj9kl",
                secret: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"
            });
        });
        requestObj = {
            "method": "GET"
        };
        oauthClientInstance.fetch(requestObj, function (err, data) {
            expect(err).to.exist;
            done();
        });
        
    });

    it("check method missing mandatory params", function (done) {
        before(function () {
            oauthClientInstance = oauthClient.create({
                public: "asdfg2345tghj89uk9klas34d5f6g7uhj9kl",
                secret: "s3d4f56g7h8jk09j8h7g6fcvb7n8m90"
            });
        });
        oauthClientInstance.fetch({}, function (err, data) {
            expect(err).to.exist;
            done();
        });
    });
    
});