"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const postgres_1 = require("../../data/postgres");
const create_todo_1 = require("../../domain/dtos/todos/create-todo");
const dtos_1 = require("../../domain/dtos");
class TodosController {
    getTodos = async (req, res) => {
        const todos = await postgres_1.prisma.todo.findMany();
        res.json(todos);
    };
    getTodoById = async (req, res) => {
        const id = +req.params.id;
        if (isNaN(id))
            res.status(400).json({ error: "ID arguement is not a number" });
        const todo = await postgres_1.prisma.todo.findUnique({
            where: {
                id,
            },
        });
        todo
            ? res.json(todo)
            : res.status(404).json({ message: `Todo with Id ${id} is not found` });
    };
    createTodo = async (req, res) => {
        const [error, createTodoDto] = create_todo_1.CreateTodoDto.create(req.body);
        if (error) {
            return res.status(400).json({ mesage: error });
        }
        const todo = await postgres_1.prisma.todo.create({
            data: createTodoDto,
        });
        res.status(201).json(todo);
    };
    updateTodo = async (req, res) => {
        const id = +req.params.id;
        if (isNaN(id)) {
            return res.json({ error: "ID argument is not a number" });
        }
        const todo = await postgres_1.prisma.todo.findFirst({
            where: { id },
        });
        if (!todo) {
            return res
                .status(404)
                .json({ message: `Todo with id ${id} is not found` });
        }
        const [error, updateTodoDto] = dtos_1.UpdateTodoDto.create(req.body);
        if (error) {
            return res.status(400).json({ error });
        }
        const { title, description, completed, priority } = updateTodoDto;
        const updateTodo = await postgres_1.prisma.todo.update({
            data: {
                title,
                description,
                completed,
                priority,
            },
            where: {
                id,
            },
        });
        return res.json(updateTodo);
    };
    deleteTodo = async (req, res) => {
        const id = +req.params.id;
        if (isNaN(id)) {
            res.status(400).json({ error: "ID argument is not a number" });
        }
        const todo = await postgres_1.prisma.todo.findUnique({
            where: {
                id,
            },
        });
        if (!todo) {
            return res.status(404).json({ message: `Id ${id} is not found` });
        }
        await postgres_1.prisma.todo.delete({ where: { id } });
        res.status(200).json({ message: `Id ${id} deleted` });
    };
}
exports.TodosController = TodosController;
//# sourceMappingURL=controller.js.map