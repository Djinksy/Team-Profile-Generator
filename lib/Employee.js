// employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
     //return name from input
    getName() {
        return this.name;
    }
    // return Id from input
    getId () {
        return this.id;
    }
    //return email from input
    getEmail () {
        return this.email;
    }
    // returning the employee
     getRole () {
        return "Employee"
     }
}

//exported
module.exports = Employee;