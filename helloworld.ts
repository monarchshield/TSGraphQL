import { Person } from "./person";
import { Employee } from './employee';


//Creating a variable type
let message : string = "Hello World";
console.log(message);


//Convert type to another type
let cast : number = 5
let stringnum : string = cast.toString()

//Person class
let Human : Person = new Person("John", "Smith", "JohnSmith@gmail.com");

//Inherited Employee class: Extends Person
let Human2 : Employee = new Employee("Rose", "Mary", "Rmary@outlook.com", "Receptionist");

//Default Person class object
Human.PrintName();
Human.PrintEmail();

//Experiment with inheritence
Human2.PrintJob();
Human2.PrintEmail();