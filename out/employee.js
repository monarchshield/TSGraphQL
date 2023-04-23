"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const person_1 = require("./person");
class Employee extends person_1.Person {
    /**
     * The default constructor for the employee class
     *
     * @param fname - The first name of the person
     * @param lname - The last name of the person
     * @param email - The email address of the person
     * @param title - The persons job title
     */
    constructor(fname, lname, email, title) {
        super(fname, lname, email);
        this.jobtitle = title;
    }
    /**
    * @remark - Print the name of the person & There job title
    */
    PrintJob() {
        this.PrintName();
        console.log("Job Title: " + this.jobtitle);
    }
}
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map