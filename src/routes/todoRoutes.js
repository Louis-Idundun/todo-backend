const express = require('express');
const router = express.Router();
const todoController = require ('../controllers/todoController')

/**
 * @swagger
 * /todos/fetch:
 *   get:
 *     summary: Retrieve a list of todos
 *     responses:
 *       200:
 *         description: A list of todos
 */
router.get('/todos/fetch', todoController.getTodos);

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Retrieve a single todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to retrieve
 *     responses:
 *       200:
 *         description: A single todo
 */
router.get('/todos/:id', todoController.getTodoById);

/**
 * @swagger
 * /todos/create:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: The created todo
 */
router.post('/todos/create', todoController.createTodo);

/**
 * @swagger
 * /todos/update/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: The updated todo
 */
router.put('/todos/update/:id', todoController.updateTodo);

/**
 * @swagger
 * /todos/delete/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the todo to delete
 *     responses:
 *       200:
 *         description: A message indicating successful deletion
 */
router.delete('/todos/delete/:id', todoController.deleteTodo);

module.exports = router;
