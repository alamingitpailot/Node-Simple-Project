const { v4: uuidv4 } = require('uuid');

const Todo = require('../Models/todo.model')

const getAllTodos = async (req, res, next) => {
    const pending = req.query.status;
    console.log(pending)

    try {
        const allTodo = await Todo.find();
        allTodo.forEach(el => {
            if (el.status === pending) {
                res.status(200).json([el]);
            } if (el.status = pending) {
                res.status(200).json([el]);
            } else {
                res.status(200).json([el]);
            }
        });

    } catch (error) {
        res.status(500).send(error.message);
        next(error)
    }
}

const createTodo = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {

        const result = await Todo.create(data)
        res.status(201).json(result);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteTodo = async (req, res) => {
    try {
        await Todo.deleteOne({ id: req.params.id })
        res.status(200).json({ msg: "Todo is deleted" })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findOne({ id: req.params.id });
        todo.title = req.body.title;
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo }