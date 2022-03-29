import { TodoController, TodoItemsView, TodoTotalView, TodoOpenView}  from "./todo.js"
import { Suite }                from "../test/test.js";

const todoControllerSuite = Suite("todo");

todoControllerSuite.add("todo-crud", assert => {

    const todoController = TodoController();

    assert.is(todoController.numberOfTodos(),     0);
    assert.is(todoController.numberOfopenTasks(), 0);
    assert.is(todoController.openTaskRatio(),     undefined);

    todoController.addTodo();
    assert.is(todoController.numberOfTodos(),     1);
    assert.is(todoController.numberOfopenTasks(), 1);
    assert.is(todoController.openTaskRatio(),     1); // 100%


    todoController.addTodo();


});

todoControllerSuite.run();
