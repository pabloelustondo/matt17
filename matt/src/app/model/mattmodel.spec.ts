import {MattTodo, MattStatus} from "./todo"
import {MattModel} from "./mattmodel"
import {MattTodoListSample} from "./todolistsample"

let mattModel: MattModel;

describe("MattModel", function() {

  beforeEach(function() {
  });

  it("can be created", function() {
    mattModel = new MattModel([]);
    expect(mattModel).toBeDefined();
  });

  it("it can receive data in constructor", function() {
    mattModel = new MattModel(MattTodoListSample);
    expect(mattModel).toBeDefined();
  });

  it("it returns the list of all allTodos", function() {
    mattModel = new MattModel(MattTodoListSample);
    expect(mattModel.allTodos).toBeDefined();
    expect(mattModel.allTodos.length).toBe(MattTodoListSample.length);
  });

  it("it has a notion of current time frame (day,week,season,year)", function() {
    mattModel = new MattModel(MattTodoListSample);
    expect(mattModel.timeFrame).toBeDefined();
  });

});
