import { Person } from "./person";


let message : string = "Hello World";
console.log(message);

let Human = new Person("John", "Smith", "JohnSmith@gmail.com");
Human.PrintName();
Human.PrintEmail();
Human.PrintName();