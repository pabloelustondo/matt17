import {MattTodo, MattTodoData, MattStatus} from "./todo"

export type MattTimeFrame = "Day" | "Week" | "Season" | "Year";

export class MattModel {

  private _allTodos;
  timeFrame: MattTimeFrame = "Day";

  constructor(todoListData: MattTodoData[]){
    this._allTodos = [];
    todoListData.forEach( (t) => {
      this._allTodos.push( new MattTodo(t));
    })
  }

  get allTodos(): MattTodo[] {
    return this._allTodos;
  }
}
