"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoDto = exports.UpdateTodoSchema = void 0;
const zod_1 = require("zod");
exports.UpdateTodoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "El título es obligatorio").optional(),
    description: zod_1.z
        .string()
        .min(1, "La descripción no puede estar vacía")
        .optional(),
    completed: zod_1.z.boolean().optional(),
    priority: zod_1.z.enum(["Baja", "Media", "Alta"]).optional(),
});
class UpdateTodoDto {
    title;
    description;
    completed;
    priority;
    constructor(title, description, completed, priority) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.priority = priority;
    }
    static create(props) {
        const parsed = exports.UpdateTodoSchema.safeParse(props);
        if (!parsed.success) {
            return [parsed.error.issues.map(err => err.message).join(", ")];
        }
        const { title, description, completed, priority } = parsed.data;
        return ["", new UpdateTodoDto(title, description, completed, priority)];
    }
}
exports.UpdateTodoDto = UpdateTodoDto;
//# sourceMappingURL=update-todo.js.map