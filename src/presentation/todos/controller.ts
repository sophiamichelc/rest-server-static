import { Request, Response } from "express";

export class TodosController {
   getTodos = (req: Request, res: Response) => {
    res.json([
      {
        id: 101,
        title: "Aprender a usar la API de Gemini",
        description:
          "Explorar la documentación y hacer las primeras llamadas de prueba.",
        completed: false,
        priority: "Alta",
        due_date: "2025-12-10",
      },
      {
        id: 102,
        title: "Configurar el entorno de desarrollo",
        description: "Instalar dependencias y configurar el entorno virtual.",
        completed: true,
        priority: "Media",
        due_date: "2025-12-03",
      },
      {
        id: 103,
        title: "Diseñar la interfaz de usuario (UI)",
        description:
          "Crear un boceto inicial para la aplicación de gestión de tareas.",
        completed: false,
        priority: "Baja",
        due_date: "2025-12-15",
      },
      {
        id: 104,
        title: "Revisar el código de la semana pasada",
        description:
          "Optimizar el manejo de errores y refactorizar el módulo de autenticación.",
        completed: false,
        priority: "Alta",
        due_date: "2025-12-05",
      },
    ]);
  };
}
