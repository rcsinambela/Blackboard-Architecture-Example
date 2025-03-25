const blackboard = require('./Blackboard');
const ks1 = require('./KnowledgeSource1');
const ks2 = require('./KnowledgeSource2');
const ks3 = require('./KnowledgeSource3');

class Controller {
    run() {
        console.log("Memulai proses Blackboard...");
        ks1.process();
        ks2.process();
        ks3.process();
        blackboard.show();
    }
}

module.exports = new Controller();
