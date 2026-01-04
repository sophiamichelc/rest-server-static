"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoDto = void 0;
//Validar puede ser asi o con zod
class CreateTodoDto {
    title;
    description;
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    static create(props) {
        const { title, description } = props;
        if (!title) {
            return ["Property title is required"];
        }
        if (!description) {
            return ["Property description is required"];
        }
        return ["", new CreateTodoDto(title, description)];
    }
}
exports.CreateTodoDto = CreateTodoDto;
//# sourceMappingURL=create-todo.js.map