/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('repair'); // -> 'a thing'
 */
 var energy = require("energy_collector");

function all_structures_damaged(creep) {
    var structuresNeedsRepair = creep.room.find(FIND_MY_STRUCTURES, {
        filter: function(i) {
            return i.hits < i.hitsMax;
        }
    });

    return structuresNeedsRepair;
}

module.exports = function(creep) {

	    var construction = all_structures_damaged(creep);
	    if(construction == undefined || construction == null || construction.length == 0) {
	        energy(creep);
	    }
	    else {
	         if(creep.energy == 0) {
        		creep.moveTo(Game.spawns.Spawn1);
        	    if(Game.spawns.Spawn1.energy > 600) {
        	        Game.spawns.Spawn1.transferEnergy(creep, creep.energyCapacity - creep.energy);
        	    }
        	} else {
    	        var cons = construction[0];
    	        creep.moveTo(cons);
    		    creep.repair(cons);
        	}
	    }
}
