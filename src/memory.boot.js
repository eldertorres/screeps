var allspawns = _.filter(Game.spawns, s => s.structureType == STRUCTURE_SPAWN);
// check for each spawn the numbers are set
for (let spawns of allspawns) {
    if (spawns.memory.booted != true){
//put minCreeps in memory
        minCreeps = {};
//define all the roles and amount
        let numberOfCreeps = {};
        let creepsInRoom = spawns.room.find(FIND_MY_CREEPS);
        var evolve = numberOfCreeps['miner'] = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');
        spawns.memory.minCreeps = minCreeps;
        spawns.memory.minCreeps.upgrader = 0
        spawns.memory.minCreeps.builder = 1
        spawns.memory.minCreeps.repairer = 1
        spawns.memory.minCreeps.wallRepairer = 1
        spawns.memory.minCreeps.LongDistanceHarvester = 0
        spawns.memory.minCreeps.claimer = 0
        spawns.memory.minCreeps.miner = 2
        spawns.memory.minCreeps.harvester = 3-evolve
        spawns.memory.minCreeps.lorry = 1
        spawns.memory.booted = true;
        spawns.memory.minLongDistanceHarvesters = {}
        spawns.memory.minLongDistanceHarvesters.W7N4 = 1
        spawns.memory.minLongDistanceHarvesters.W6N3 = 1
        spawns.memory.minLongDistanceHarvesters.W8N3 = 3
        spawns.memory.minLongDistanceHarvesters.W8N5 = 1
//spawns.memory.minLongDistanceHarvesters.W5N3 = 1
    }
}