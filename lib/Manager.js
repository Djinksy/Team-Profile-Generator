// importing Employee constructor 
const Employee = require("./Employee");


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // changing employee role to manager 
    getRole () {
        return "Manager";
    }
}

// exported 
module.exports = Manager; 