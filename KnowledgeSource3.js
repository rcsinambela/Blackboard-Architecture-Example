const blackboard = require('./Blackboard');

class KnowledgeSource3 {
    process() {
        const angka1 = blackboard.read('angka1');
        const angka2 = blackboard.read('angka2');

        if (angka1 !== undefined && angka2 !== undefined) {
            const sum = angka1 + angka2;
            console.log(`Knowledge Source 3: Menjumlahkan angka ${angka1} + ${angka2} = ${sum}`);
            blackboard.write('hasil', sum);
        } else {
            console.log("Knowledge Source 3: Data belum lengkap untuk dijumlahkan.");
        }
    }
}

module.exports = new KnowledgeSource3();
