"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const employee_1 = require("./employee");
const graphql_1 = require("graphql");
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
//Creating a variable type
let message = "Hello World";
console.log(message);
//Convert type to another type
let cast = 5;
let stringnum = cast.toString();
//Person class
let Human = new person_1.Person("John", "Smith", "JohnSmith@gmail.com");
//Inherited Employee class: Extends Person
let Human2 = new employee_1.Employee("Rose", "Mary", "Rmary@outlook.com", "Receptionist");
const users = [
    { id: 1, name: "Jimmy John", email: 'J.J@gmail.com' },
    { id: 2, name: "Mary Williams", email: 'M.W@hotmail.com' },
    { id: 3, name: "Anna May", email: 'Anime@outlook.com' },
];
const schema = (0, graphql_1.buildSchema)(`
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
        createUser(input: UserInput) : user
        UpdateUser(id: Int!, input: userInput) : user
    }

    type Query {
        GetUsers(id: String) : User
        GetUsers: [User]
    }
`);
const getUser = (args) => users.find(u => u.id === args.id);
const getUsers = () => users;
const createUser = (args) => {
    const user = Object.assign({ id: users.length + 1 }, args.input);
    users.push(user);
    return user;
};
const updateUser = (args) => {
    const index = users.findIndex(u => u.id === args.user.id);
    const targetUser = users[index];
    if (targetUser)
        users[index] = args.user;
    return targetUser;
};
const root = {
    getUser,
    getUsers,
    createUser,
    updateUser,
};
//Default Person class object
Human.PrintName();
Human.PrintEmail();
//Experiment with inheritence
Human2.PrintJob();
Human2.PrintEmail();
const app = (0, express_1.default)();
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(8000);
console.log(`Running a GraphQL API server at http://localhost:${8000}/graphql`);
//# sourceMappingURL=main.js.map