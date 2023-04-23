export class Person
{
    private _firstname : string;
    private _lastname : string;
    private _email : string;

    constructor(firstname : string, lastname : string, email : string)
    {
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }

    PrintName()
    {
        console.log("Person name is: " + this._firstname + " " +this._lastname);
    }

    PrintEmail()
    {
        console.log("Email address: " + this._email);
    }
}