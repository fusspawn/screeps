function RandomSource() {
    var sources = Game.spawns.Spawn1.room.find(FIND_SOURCES_ACTIVE);
    return sources[Math.floor(Math.random()*sources.length)];
}



function FindSafePath(creep, target) {
    var banned_in = [creep.room.getPositionAt(9,7),
                     creep.room.getPositionAt(9,6),
                     creep.room.getPositionAt(9,5),
                     creep.room.getPositionAt(9,4),
                     creep.room.getPositionAt(26,22),
                     creep.room.getPositionAt(27,22),
                     creep.room.getPositionAt(28,22),
                     creep.room.getPositionAt(28,23),
                     creep.room.getPositionAt(28,24),
                     creep.room.getPositionAt(29,22),
                     creep.room.getPositionAt(30,22)];
    creep.moveTo(target, {avoid: banned_in});
}

module.exports = function (creep) {
	if(creep.energy < creep.energyCapacity) {
	    if(creep.memory.sourceid === undefined) {
	        creep.memory.sourceid = RandomSource().id;
	    } else {
	        var source = Game.getObjectById(creep.memory.sourceid);
	        FindSafePath(creep, source);
	        creep.harvest(source);
		}
	}
	else {
	    creep.moveTo(Game.spawns.Spawn1);
		var transfer = creep.transferEnergy(Game.spawns.Spawn1);
	}
}
