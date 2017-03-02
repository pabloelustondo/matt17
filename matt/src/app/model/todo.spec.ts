import {MattTodo, MattStatus, MattTodoData} from "./todo"

let todo: MattTodo;

describe("MattTodo", function() {

  beforeEach(function() {
    let t:MattTodoData = new MattTodoData();
    t.id = 0;
    t.name = "name";
    t.description = "description";
    t.notes = "notes";

    t.status = "White";
    t.points = 1;

    t.dayActionStatus = "Red";
    t.weekActionStatus = "Yellow";
    t.seasonActionStatus = "Green";
    t.yearActionStatus = "Blue";

    todo = new MattTodo(t);
  });

  it("should have id, name, description, notes ", function() {
    expect(todo.id).toBeDefined();
    expect(todo.name).toBeDefined();
    expect(todo.description).toBeDefined();
    expect(todo.notes).toBeDefined();
  });

  it("should have status of type red/yellow/white/green/blue ", function() {
    expect(todo.status).toBeDefined();
  });

  it("should have dayStatus, weekStatus, seasonStatus, yearStatus of type red/yellow/white/green/blue ", function() {
    expect(todo.dayActionStatus).toBeDefined();
    expect(todo.weekActionStatus).toBeDefined();
    expect(todo.seasonActionStatus).toBeDefined();
    expect(todo.yearActionStatus).toBeDefined();
  });

  it("returns a css class for statuses, action statuses, name etc", function() {
    todo.status = "Yellow";
    expect(todo.statusCssClass).toBe("MattStatusYellow");
    todo.dayActionStatus = "Yellow";
    expect(todo.dayActionStatusCssClass).toBe("MattActionStatusYellow");
    expect(todo.nameCssClass).toBe("MattName");
    todo.weekActionStatus = "Yellow";
    expect(todo.weekActionStatusCssClass).toBe("MattActionStatusYellow");
  });

});
