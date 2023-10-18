
const router = require("express").Router();

const { getAllTodos, createTodo, deleteTodo, updateTodo } = require("../Controllers/todo.controller");

router.get("/", getAllTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

module.exports = router;