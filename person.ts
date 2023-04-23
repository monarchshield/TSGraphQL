export class Person
{

    private _firstname : string;
    private _lastname : string;
    private _email : string;

    /**
     * @remarks - The default constructor for the person class
     * @param fname - The firstname of the person
     * @param lname - The lastname of the person
     * @param email - The email address of the person
     */
    constructor(fname : string, lname : string, email : string)
    {
        this._firstname = fname;
        this._lastname = lname;
        this._email = email;
    }

    /**
     * @remark - Print the name of the person
     */
    PrintName()
    {
        console.log("Person name is: " + this._firstname + " " +this._lastname);
    }

     /**
     * @remark - Print the email of the person
     */
    PrintEmail()
    {
        console.log("Email address: " + this._email);
    }
}