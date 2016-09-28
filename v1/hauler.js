/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('hauler'); // -> 'a thing'
 */
function FindController() {
    var sources = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
        filter: { structureType: STRUCTURE_CONTROLLER }
    });
    return sources[0];
}

var harvester = require("harvester");
module.exports = function (creep) {
	if(creep.energy == 0) {
	    if(Game.spawns.Spawn1.energy > 1000) {
	        creep.moveTo(Game.spawns.Spawn1, {reusePath: 20});
	        Game.spawns.Spawn1.transferEnergy(creep, creep.energyCapacity - creep.energy);
	    } else {
	        if(creep.energy > 0) {
	            creep.moveTo(Game.spawns.Spawn1);
		        var transfer = creep.transferEnergy(Game.spawns.Spawn1);
	        } else {
	            creep.moveTo(Game.flags.Off);
	        }
	    }
	}
	else {
	    creep.moveTo(FindController());
		creep.upgradeController(FindController());
	}
}
