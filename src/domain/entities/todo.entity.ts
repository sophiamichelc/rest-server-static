export class TodoEntity {
    constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly description: string,
        public readonly completed?: boolean,
        public readonly priority?: string,
        public readonly createdAt?: Date
    ) { }

    get isCompleted() {
        return !!this.completed
    }

    public static fromObject(object: { [key: string]: any }): TodoEntity {
        const { id, title, description, completed, priority, createdAt } = object


        if (!id) throw 'id is required'
        if (!title) throw 'title is required'
        if (!description) throw 'description is required'

        return new TodoEntity(id, title, description, completed, priority, createdAt)
    }
}