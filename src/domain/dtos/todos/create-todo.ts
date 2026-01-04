//Validar puede ser asi o con zod
export class CreateTodoDto {
  private constructor(
    public readonly title: string,
    public readonly description: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateTodoDto?] {
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
