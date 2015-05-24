/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('energy_collector'); // -> 'a thing'
 */


module.exports = function (creep) {
	if(creep.energy < creep.energyCapacity) {
	    var dropped = creep.room.find(FIND_DROPPED_ENERGY);
	    creep.say(dropped.length);
	    if(dropped.length > 0) {
	        creep.moveTo(dropped[0]);
	        creep.pickup(dropped[0])
	    } else {
	        creep.moveTo(Game.flags.Off);
	    }
	}
	else {
	    creep.moveTo(Game.spawns.Spawn1);
		var transfer = creep.transferEnergy(Game.spawns.Spawn1);
	}
}
