/* Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawning_logic'); // -> 'a thing'
 */

function CreepsInRole(role, spawn) {
    var sources = [];
    for(var creep in Game.creeps) {
        if(Game.creeps[creep].memory.role !== undefined) {
            if(Game.creeps[creep].memory.role.toLowerCase() == role)
                sources.push(Game.creeps[creep])
        }
    }
    return sources.length;
}

 function unfinished_constructions(room) {
    var sites = room.find(FIND_CONSTRUCTION_SITES);
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


 function get_total_spawns() {
     var count = 0;
     for(var c in Game.creeps)
        count += 1;
     return count;
 }

 module.exports =  function()
 {
    this.MIN_ENERGY = 200;
    this.MAX_HARVESTER_SPAWNS = 10
    this.MAX_HAULER_SPAWNS = 4;
    this.MAX_COMBAT_BUDDY_SPAWNS = 4;
    this.MAX_BUILDER_SPAWNS = 1;
    this.MAX_REPAIR_SPAWNS = 0;

    this.do_spawning_tick = function(spawn)
    {
        if(spawn.spawning !== null) {
            Memory.DEBUG="SPAWNING";
            return;
        }

        if(spawn.energy < this.MIN_ENERGY) {
            Memory.DEBUG = "NO ENERGY";
            return };

        if(CreepsInRole("harvester", spawn)
        < this.MAX_HARVESTER_SPAWNS) {
            Memory.DEBUG = "Harvester";
            var id = Memory.TOTAL_SPAWNS + 1;
            Memory.DEBUG = "HarvesterID: " + id + "FOUND: " + CreepsInRole("harvester", spawn);
            spawn.spawnBasicHarvester(id);
            Memory.TOTAL_SPAWNS += 1;
            return;
        }
        else if(CreepsInRole("hauler", spawn)
        < this.MAX_HAULER_SPAWNS && spawn.energy > 1000) {
            Memory.DEBUG = "H:" + CreepsInRole("hauler");
            var id = Memory.TOTAL_SPAWNS + 1;
            spawn.spawnBasicHauler(id);
            Memory.TOTAL_SPAWNS += 1;
            return;
        } else if(CreepsInRole("builder", spawn)
        < this.MAX_BUILDER_SPAWNS
        && unfinished_constructions(spawn.room) !== null) {
            Memory.DEBUG = "H:" + CreepsInRole("builder");
            var id = Memory.TOTAL_SPAWNS + 1;
            spawn.spawnBasicBuilder(id);
            Memory.TOTAL_SPAWNS += 1;
            return;
        } else if(CreepsInRole("repair", spawn)
        < this.MAX_REPAIR_SPAWNS) {
            Memory.DEBUG = "R:" + CreepsInRole("repair");
            var id = Memory.TOTAL_SPAWNS + 1;
            spawn.spawnBasicRepair(id);
            Memory.TOTAL_SPAWNS += 1;
            return;
        }
        /*else if(CreepsInRole("combat_buddy", spawn)
        < this.MAX_HAULER_SPAWNS) {
            Memory.DEBUG = "CB:" + CreepsInRole("combat_buddy");
            var id = Memory.TOTAL_SPAWNS + 1;
            spawn.spawnBasicCombatBuddy(id);
            Memory.TOTAL_SPAWNS += 1;
            return;
        }*/
        else {
            Memory.DEBUG = "NOTHING";
        }
    }
 }
