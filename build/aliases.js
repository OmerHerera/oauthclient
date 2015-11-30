module.exports = function (grunt, options) {

    //var tasks = ["clean", "env", "instrument", "mochaTest", "storeCoverage", "makeReport"];
    var tasks = ["mochaTest"];

    // computation...
    return {
        "tasks": ["availabletasks"],
        "default": tasks
    };
};
