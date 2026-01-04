import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

export class TodosController {
  getTodos = async (req: Request, res: Response) => {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  };

  getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id!;

    if (isNaN(id))
      res.status(400).json({ error: "ID arguement is not a number" });

    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    });

    todo
      ? res.json(todo)
      : res.status(404).json({ message: `Todo with Id ${id} is not found` });
  };

  createTodo = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    if (!title) res.status(400).json({ error: "Title is required" });
    if (!description)
      res.status(400).json({ error: "Description is required" });

    const todo = await prisma.todo.create({
      data: {
        title: title,
        description: description,
      },
    });

    res.status(201).json(todo);
  };

  updateTodo = async (req: Request, res: Response) => {
    const id = +req.params.id!;

    if (isNaN(id)) {
      return res.json({ error: "ID argument is not a number" });
    }

    const todo = await prisma.todo.findFirst({
      where:{id}
    })

    
    if (!todo) {
      return res
      .status(404)
      .json({ message: `Todo with id ${id} is not found` });
    }
    
    const { title, description, completed, priority } = req.body;

   
    const updateTodo = await  prisma.todo.update({
      data:{
        title,
        description,
        completed,
        priority
      },
      where: {
        id
      }
    })

    return res.json(updateTodo);
  };

  deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id!;

    if (isNaN(id)) {
      res.status(400).json({ error: "ID argument is not a number" });
    }
    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    });
    if (!todo) {
      return res.status(404).json({ message: `Id ${id} is not found` });
    }

    await prisma.todo.delete({ where: { id } });

    res.status(200).json({ message: `Id ${id} deleted` });
  };
}
