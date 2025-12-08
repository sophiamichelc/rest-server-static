import { Request, Response } from "express";
import { createDate } from "../../helpers/create-date";

const todos = [
  {
    id: 101,
    title: "Aprender a usar la API de Gemini",
    description:
      "Explorar la documentación y hacer las primeras llamadas de prueba.",
    completed: false,
    priority: "Alta",
    createdAt: "2025-12-10",
  },
  {
    id: 102,
    title: "Configurar el entorno de desarrollo",
    description: "Instalar dependencias y configurar el entorno virtual.",
    completed: true,
    priority: "Media",
    createdAt: "2025-12-03",
  },
  {
    id: 103,
    title: "Diseñar la interfaz de usuario (UI)",
    description:
      "Crear un boceto inicial para la aplicación de gestión de tareas.",
    completed: false,
    priority: "Baja",
    createdAt: "2025-12-15",
  },
  {
    id: 104,
    title: "Revisar el código de la semana pasada",
    description:
      "Optimizar el manejo de errores y refactorizar el módulo de autenticación.",
    completed: false,
    priority: "Alta",
    createdAt: "2025-12-05",
  },
];

export class TodosController {
  getTodos = (req: Request, res: Response) => {
    res.json(todos);
  };

  getTodoById = (req: Request, res: Response) => {
    const id = +req.params.id!;

    if (isNaN(id))
      res.status(400).json({ error: "ID arguement is not a number" });

    const todo = todos.find((todo) => todo.id === id);

    todo
      ? res.json(todo)
      : res.status(404).json({ message: `Todo with Id ${id} is not found` });
  };

  createTodo = (req: Request, res: Response) => {
    const { title, description } = req.body;

    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      completed: false,
      priority: "Baja",
      createdAt: createDate(),
    };
    todos.push(newTodo);

    res.status(201).json(newTodo);
  };
}
