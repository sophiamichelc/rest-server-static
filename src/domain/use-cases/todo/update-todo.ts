import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface UpdateTodoUseCase {
    execute(updateTodoDto: UpdateTodoDto, id: number): Promise<TodoEntity>,
    id: number,
}

export class UpdateTodo implements UpdateTodoUseCase {

    constructor(private readonly repository: TodoRepository, public readonly id: number) { }

    execute(dto: UpdateTodoDto, id: number): Promise<TodoEntity> {
        return this.repository.UpdateById(dto, id)
    }
}