import { z } from "zod";
export declare const UpdateTodoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    completed: z.ZodOptional<z.ZodBoolean>;
    priority: z.ZodOptional<z.ZodEnum<{
        Baja: "Baja";
        Media: "Media";
        Alta: "Alta";
    }>>;
}, z.core.$strip>;
export declare class UpdateTodoDto {
    readonly title?: string | undefined;
    readonly description?: string | undefined;
    readonly completed?: boolean | undefined;
    readonly priority?: string | undefined;
    constructor(title?: string | undefined, description?: string | undefined, completed?: boolean | undefined, priority?: string | undefined);
    static create(props: {
        [key: string]: any;
    }): [string?, UpdateTodoDto?];
}
//# sourceMappingURL=update-todo.d.ts.map