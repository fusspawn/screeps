var version = 1;
module.exports = function () {
    var sversion = Memory.version == undefined ? Memory.version : -1;
    if(sversion < version) {
        console.log("Incoming git update!");
        Memory.version = version;
    }
}
