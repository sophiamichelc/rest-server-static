import { Request, Response } from "express";
export declare class TodosController {
    getTodos: (req: Request, res: Response) => Promise<void>;
    getTodoById: (req: Request, res: Response) => Promise<void>;
    createTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=controller.d.ts.map