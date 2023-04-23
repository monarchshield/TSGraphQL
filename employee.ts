import { Person } from "./person";

export class Employee extends Person
{
    private jobtitle : string;

    /**
     * The default constructor for the employee class 
     * 
     * @param fname - The first name of the person
     * @param lname - The last name of the person
     * @param email - The email address of the person
     * @param title - The persons job title
     */ 
    constructor(fname : string, lname : string, email : string, title : string)
    {
        super(fname,lname,email)
        this.jobtitle = title;
    }


     /**
     * @remark - Print the name of the person & There job title
     */
    PrintJob()
    {
        this.PrintName()
        console.log("Job Title: " + this.jobtitle);
    }

}