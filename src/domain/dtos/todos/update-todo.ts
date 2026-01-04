import { z } from "zod";

export const UpdateTodoSchema = z.object({
  title: z.string().min(1, "El título es obligatorio").optional(),

  description: z
    .string()
    .min(1, "La descripción no puede estar vacía")
    .optional(),

  completed: z.boolean().optional(),

  priority: z.enum(["Baja", "Media", "Alta"]).optional(),
});

export class UpdateTodoDto {
  constructor(
    public readonly title?: string,
    public readonly description?: string,
    public readonly completed?: boolean,
    public readonly priority?: string
  ) {}

  static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
    const parsed = UpdateTodoSchema.safeParse(props);

    if (!parsed.success) {
        return [parsed.error.issues.map(err => err.message).join(", ")]
    }

    const { title, description, completed, priority } = parsed.data;

    return ["", new UpdateTodoDto(title,description,completed,priority)];
  }
}
