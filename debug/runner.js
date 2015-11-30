var oauthClient = require("./../src/index").create({
    public: "b40f2a8dafe5448bb88c2c49e626fb3c",
    secret: "1f46b8c4fd69d8b6"
});
var reqObj = {
    url: "https://qtvr-wap05.dev.lprnd.net/api/account/configuration/metadata/le-core/adminBrandProfiles/revisions",
    method: "GET"
};
var reqObjPost = {
    url: "https://qtvr-wap05.dev.lprnd.net/api/account/configuration/le-core/adminBrandProfiles/query?select=$all",
    method: "POST",
    json: true,
    body: {
        "type":2,
        "parameters":
            [
                {"site":"qa50143037"},
                {"site":"qa67570028"}
            ]
    },
    headers: {
        "content-type": "application/json; charset=UTF-8" }
};

oauthClient.fetch(reqObj, function (err, data) {
     console.log("----------GET--------------");
     console.log(JSON.stringify(data.body));
});

 oauthClient.fetch(reqObjPost, function (err, data) {
     console.log("----------POST--------------");
     console.log(JSON.stringify(data));
 });
