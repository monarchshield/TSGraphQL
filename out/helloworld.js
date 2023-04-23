"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const employee_1 = require("./employee");
//Creating a variable type
let message = "Hello World";
console.log(message);
//Casting example (bad example)
let cast = 5;
let stringnum = cast.toString();
//Person class
let Human = new person_1.Person("John", "Smith", "JohnSmith@gmail.com");
//Inherited Employee class: Extends Person
let Human2 = new employee_1.Employee("Rose", "Mary", "Rmary@outlook.com", "Receptionist");
//Default Person class object
Human.PrintName();
Human.PrintEmail();
//Experiment with inheritence
Human2.PrintJob();
Human2.PrintEmail();
//# sourceMappingURL=helloworld.js.map