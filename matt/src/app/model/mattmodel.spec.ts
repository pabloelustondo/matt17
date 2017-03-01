import {MattTodo, MattStatus} from "./todo"
import {MattModel} from "./mattmodel"
import {MattTodoListSample} from "./todolistsample"

let todolist: MattModel;

describe("MattModel", function() {

  beforeEach(function() {
  });

  it("can be created", function() {
    todolist = new MattModel([]);
    expect(todolist).toBeDefined();
  });

  it("it can receive data in constructor", function() {
    todolist = new MattModel(MattTodoListSample);
    expect(todolist).toBeDefined();
  });

  it("it returns the list of all allTodos", function() {
    todolist = new MattModel(MattTodoListSample);
    expect(todolist.allTodos).toBeDefined();
    expect(todolist.allTodos.length).toBe(MattTodoListSample.length);
  });

});
