import { Request, Response } from "express";

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

    const todo = todos.find((todo) => todo.id === id);

    todo
      ? res.json(todo)
      : res.status(404).json({ message: `Todo with Id ${id} is not found` });
  };
}
