class Blackboard {
    constructor() {
        this.data = {};
    }

    write(key, value) {
        this.data[key] = value;
    }

    read(key) {
        return this.data[key];
    }

    show() {
        console.log("Current Blackboard State:", this.data);
    }
}

module.exports = new Blackboard();
