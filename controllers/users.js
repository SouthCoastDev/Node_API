import { v4 as uuid } from 'uuid';

let users = [
    {
        id: uuid(),
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        id: uuid(),
        firstName: "Jane",
        lastName: "Doe",
        age: 26
    }
]

export const createUser = (req, res) => {
   
    const user = req.body;
    const userWithId = { id: uuid(), ...user};
    users.push(userWithId);

    res.send(`User with the name: ${user.firstName} added successfully.`);
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const {id} = req.params;
    const user = users.find((user) => user.id == id);
    res.send(user);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from database`);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);
    console.log(user);
    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated.`);
 
}