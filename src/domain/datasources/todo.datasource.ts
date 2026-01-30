import { CreateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";
import { UpdateTodoDto } from '../dtos/todos/update-todo';

export abstract class TodoDatasource {
    abstract create(createTodoDto: CreateTodoDto): Promise<TodoEntity>

    //TODO: Paginaciòn
    abstract getAll(): Promise<TodoEntity[]>

    abstract findById(id: number): Promise<TodoEntity>

    abstract UpdateById(updateTodoDto: UpdateTodoDto, id: number): Promise<TodoEntity>

    abstract deleteById(id: number): Promise<TodoEntity>
}