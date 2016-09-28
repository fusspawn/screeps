/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn_functions'); // -> 'a thing'
 */


Spawn.prototype.spawnBasicHarvester = function (id) {
   var c = this.createCreep([WORK,WORK,CARRY,WORK,MOVE], "harvester" + id.toString(), {role: "harvester"});
   return c;
}

Spawn.prototype.spawnBasicHauler = function (id) {
   var c = this.createCreep([WORK,CARRY,WORK,MOVE,MOVE], "hauler" + id.toString(), {role: "hauler"});
   return c;
}


Spawn.prototype.spawnBasicCombatBuddy = function (id) {
   var c = this.createCreep([RANGED_ATTACK,MOVE,TOUGH,HEAL,MOVE], "combat_buddy" + id.toString(), {role: "combat_buddy"});
   return c;
}

Spawn.prototype.spawnBasicBuilder = function (id) {
   var c = this.createCreep([WORK, CARRY, MOVE], "builder" + id.toString(), {role: "builder"});
   return c;
}

Spawn.prototype.spawnBasicRepair = function (id) {
   var c = this.createCreep([WORK,CARRY,CARRY, MOVE], "repair" + id.toString(), {role: "repair"});
   return c;
}
