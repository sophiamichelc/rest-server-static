import { prisma } from "../../data/postgres";
import { CreateTodoDto, TodoDatasource, TodoEntity, UpdateTodoDto } from "../../domain";

export class TodoDatasourceImpl extends TodoDatasource {
    async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        const todo = await prisma.todo.create({
            data: createTodoDto!,
        });

        return TodoEntity.fromObject(todo)
    }
    async getAll(): Promise<TodoEntity[]> {
        const todos = await prisma.todo.findMany();
        return todos.map(todo => TodoEntity.fromObject(todo))
    }
    async findById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findFirst({
            where: {
                id,
            },
        });
        if (!todo) throw `Todo with id ${id} not found.`
        return TodoEntity.fromObject(todo!)
    }
    async UpdateById(updateTodoDto: UpdateTodoDto, id: number): Promise<TodoEntity> {

        await this.findById(id)

        const updateTodo = await prisma.todo.update({
            data: {
                title: updateTodoDto.title!,
                description: updateTodoDto.description!,
                priority: updateTodoDto.priority!,
                completed: updateTodoDto.completed!,
            },
            where: {
                id: id,
            },
        });

        return TodoEntity.fromObject(updateTodo)

    }
    async deleteById(id: number): Promise<TodoEntity> {
        await this.findById(id)
        const todo = await prisma.todo.delete({ where: { id } });
        return TodoEntity.fromObject(todo)
    }

}