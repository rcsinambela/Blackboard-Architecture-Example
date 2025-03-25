const blackboard = require('./Blackboard');

class KnowledgeSource2 {
    process() {
        console.log("Knowledge Source 2: Menambahkan angka kedua...");
        blackboard.write('angka2', 20);
    }
}

module.exports = new KnowledgeSource2();
