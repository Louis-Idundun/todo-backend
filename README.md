# todo-backend
This is the backend implementation of the Todo Application, built using Node.js, Express.js, and MongoDB. It provides a RESTful API for managing tasks, enabling operations such as creating, reading, updating, and deleting todos.

## Features
Create Todo: Add a new task to the todo list.

Read Todos: Retrieve a list of all tasks.

Read Todos: Retrieve a single todo by id.

Update Todo: Modify details of an existing task.

Delete Todo: Delete a todo from list.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- MongoDB (version 4 or higher)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/louis-idundun/todo-backend.git
   cd todo-backend


2. **Install Dependencies:**
    ```bash
    npm install

3. **Set environmental variables:**   
Create a .env file in the root directory and add the necessary variables:
e.g,
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todoapp

4. **Start mongodb server:**   
    ```bash
    mongod

5. **Start the Application:**   
    ```bash
    npm start
