"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstname, lastname, email) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }
    PrintName() {
        console.log("Person name is: " + this._firstname + " " + this._lastname);
    }
    PrintEmail() {
        console.log("Email address: " + this._email);
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map