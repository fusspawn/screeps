/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('combat_buddy'); // -> 'a thing'
 */

 function find_a_buddy() {
        var sources = [];
        for(var creep in Game.creeps) {
            if(Game.creeps[creep].memory.role !== undefined) {
                if(Game.creeps[creep].memory.role.toLowerCase() == "combat_buddy")
                    if(Game.creeps[creep].memory.buddyid == undefined)
                        sources.push(Game.creeps[creep]);
            }
        }

        if(sources.length == 0)
            return null;
        else
            return sources[0].id;
 }

 module.exports = function(creep) {
     if(creep.memory.buddyid == undefined) {
         var bid = find_a_buddy();
         if(bid != null)
            creep.memory.buddyid = bid;
         return;
     }

     var bid = creep.memory.buddyid;
     var buddy = Game.getObjectById(creep.memory.buddyid);
     if(buddy.hits <= 0) {
         delete creep.memory.buddyid;
         return;
     }

     if(!creep.memory.move
        && buddy.memory.move)
        creep.moveTo(buddy);

     if(buddy.hits > 0 && buddy.hits < buddy.hitsMax)
        creep.heal(buddy);
     else {
         var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
         if(targets.length > 0) {
            creep.rangedMassAttack();
         } else {
             var distant_target = creep.pos.find(FIND_HOSTILE_CREEPS);
             creep.moveTo(distant_target);
         }
     }
 }
