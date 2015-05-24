var version = 2;
module.exports = function () {
    var sversion = (Memory.version == undefined) ? Memory.version : -1;
    console.log(sversion);
    
    if(sversion < version) {
        console.log("Incoming git update!");
        Memory.version = version;
    }
}
