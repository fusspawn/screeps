/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('builder'); // -> 'a thing'
 */
var hauler = require("hauler");

function unfinished_constructions(creep) {
    var sites = creep.room.find(FIND_CONSTRUCTION_SITES);
    if(sites == undefined || sites == null) {
        return null;
    }
    var results = [];
    for(var site in sites) {
        if(sites[site].progress < sites[site].progressTotal)
            results.push(sites[site]);
    }
    return results;
}

module.exports = function (creep) {
	if(creep.energy == 0) {
		creep.moveTo(Game.spawns.Spawn1);
	    if(Game.spawns.Spawn1.energy > 600) {
	        Game.spawns.Spawn1.transferEnergy(creep, creep.energyCapacity - creep.energy);
	    }
	}
	else {
	    var construction = unfinished_constructions(creep);
	    if(construction == undefined || construction == null)
	        hauler(creep);
	    else {
	        var cons = construction[0];
	        creep.moveTo(cons);
		    creep.build(cons);
	    }
	}
}
