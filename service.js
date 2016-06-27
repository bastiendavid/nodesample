'use strict'

class Service {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    toConsole() {
        console.log("a = " + this.a);
        console.log("b = " + this.b);
    }
}

module.exports = Service;