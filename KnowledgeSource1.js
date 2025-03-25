const blackboard = require('./Blackboard');

class KnowledgeSource1 {
    process() {
        console.log("Knowledge Source 1: Menambahkan angka pertama...");
        blackboard.write('angka1', 10);
    }
}

module.exports = new KnowledgeSource1();
