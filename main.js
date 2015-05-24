var harvester = require('harvester');
var hauler = require('hauler');
var builder = require('builder');
var repair = require('repair');
require('spawn_functions');
var spawner = require('spawning_logic');
var spawn_logic = new spawner();

for(var i in Memory.creeps) {
    if(!Game.creeps[i]) {
        delete Memory.creeps[i];
    }
}


for(var spawn in Game.spawns)
    spawn_logic.do_spawning_tick(Game.spawns[spawn]);

for(var name in Game.creeps) {
	var creep = Game.creeps[name];
	if(creep.memory.role == 'harvester') {
		harvester(creep);
	}
	else if(creep.memory.role == 'hauler') {
	    hauler(creep);
	}
	else if(creep.memory.role == "builder") {
	    builder(creep);
	} else if (creep.memory.role == "repair")
	    repair(creep);
	else {
	    harvester(creep);
	}
}

/*for(var i in Memory.creeps) {
    if(!Game.creeps[i]) {
        delete Memory.creeps[i];
    }
}*/



function reset_all_state() {
    for(var c in Game.creeps) {
        var creep = Game.creeps[c];
        for(var i in creep.memory) {
            if(i != "role")
                delete creep.memory[i];
        }
    }
}
