var version = 2;
module.exports = function () {

    if(Memory.version == undefined)
       Memory.version = 0;

    sversion = Memory.version;
    if(sversion < version) {
        console.log("Incoming git update!");
        Memory.version = version;
    }
}
