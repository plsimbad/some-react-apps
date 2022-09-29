import { useState } from "react";
import { InputTodo } from "./inputTodo";
import { List } from "./list";

export function ToDo() {
  const [todoList, setTodoList] = useState([] as string[]);
  const [tooManyTodos, setTooManyTodos] = useState(false);

  const addTodo = (todo: string) => {
    if (todoList.length > 10) {
      setTooManyTodos(true);
      return;
    }

    if (tooManyTodos) setTooManyTodos(false);
    setTodoList([...todoList, todo]);
  };

  const removeTodo = (index: number) => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  return (
    <>
      <div className="mb-3">
        {tooManyTodos ? (
          <span className="text-red-500">
            There are too many todos for now...
          </span>
        ) : (
          "Lets add todos"
        )}
      </div>
      <InputTodo todoEmit={addTodo} />
      <List todoList={todoList} removeTodo={removeTodo} />
    </>
  );
}
