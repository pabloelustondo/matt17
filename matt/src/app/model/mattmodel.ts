import {MattTodo, MattTodoData, MattStatus} from "./todo"

export class MattModel {

  private _allTodos;

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
