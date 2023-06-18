import { Person } from "./person";
import { Employee } from './employee';
import { buildSchema } from "graphql";
import express from "express";
import { graphqlHTTP } from "express-graphql";



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





const users = [
    {id: 1, name: "Jimmy John", email: 'J.J@gmail.com' },
    {id: 2, name: "Mary Williams", email: 'M.W@hotmail.com' },
    {id: 3, name: "Anna May", email: 'Anime@outlook.com' },
]

const schema = buildSchema(`
    input UserInput {
        email: String!
        name: String!
    }

    type User {
        id: Int!
        name: String!
        email: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }

    type Query {
        getUser(id: String): User
        getUsers: [User]
    }
`)

type User = {
    id: number 
    name: string 
    email: string
}

type UserInput = Pick<User, "email" | "name">


const getUser = (args: { id: number }): User | undefined =>
    users.find(u => u.id === args.id)

const getUsers = (): User[] => users

const createUser = (args: { input: UserInput }): User => {
    const user = {
        id: users.length + 1,
        ...args.input,
    }
    users.push(user)

    return user
}

const updateUser = (args: { user: User }): User => {
    const index = users.findIndex(u => u.id === args.user.id)
    const targetUser = users[index]

    if (targetUser) users[index] = args.user

    return targetUser
}

const root = {
    getUser,
    getUsers,
    createUser,
    updateUser,
}

//Default Person class object
Human.PrintName();
Human.PrintEmail();

//Experiment with inheritence
Human2.PrintJob();
Human2.PrintEmail();

const app = express()

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

app.listen(8000)
console.log(`Running a GraphQL API server at http://localhost:${8000}/graphql`)