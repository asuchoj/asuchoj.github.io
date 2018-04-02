import { MyTask } from './myTask';

export class AddTaskService {

    myTask: MyTask[] = [];

    addTask(titleValue: string, selectValue: number, dataValue: Date, textareaValue: string) {
        this.myTask.push(new MyTask(titleValue, selectValue, dataValue, textareaValue));
        console.log(this.myTask);
    }
}
