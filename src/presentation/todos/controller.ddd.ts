import { Request, Response } from "express";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo";
import { UpdateTodoDto } from "../../domain/dtos";
import { TodoRepository } from "../../domain";

export class TodosController {

  constructor(
    private readonly todoRepository: TodoRepository
  ) { }

  getTodos = async (req: Request, res: Response) => {
    const todos = await this.todoRepository.getAll()
    console.log({ todos })
    res.json(todos)
  };

  getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id!;

    try {
      if (isNaN(id)) {
        res.status(400).json({ error: "ID arguement is not a number" })
      }

      const todo = await this.todoRepository.findById(id)
      res.json(todo)

    } catch (error) {
      res.status(400).json({ error })
    }
  };

  createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) {
      return res.status(400).json({ mesage: error });
    }

    const todo = await this.todoRepository.create(createTodoDto!)

    res.status(201).json(todo);
  };

  updateTodo = async (req: Request, res: Response) => {
    const id = +req.params.id!;

    if (isNaN(id)) {
      return res.json({ error: "ID argument is not a number" });
    }

    const [error, updateTodoDto] = UpdateTodoDto.create(req.body);

    if (error) {
      return res.status(400).json({ error });
    }

    const todo = await this.todoRepository.UpdateById(updateTodoDto!, id)
    return res.json(todo);
  };

  deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id!;

    if (isNaN(id)) {
      res.status(400).json({ error: "ID argument is not a number" });
    }
    const deleteTodo = await this.todoRepository.deleteById(id)
    res.status(200).json(deleteTodo);
  };
}
