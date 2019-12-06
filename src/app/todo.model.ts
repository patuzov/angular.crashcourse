export class TodoModel {
    task: string;
    done: boolean;

    constructor(task: string) {
        this.task = task;
        this.done = false;
    }
}