import { useState } from "react";
import { Input } from "../components/input";

export const InputTodo = (props: any) => {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    props.todoEmit(todo);
  };

  const valChange = (todo: string) => {
    setTodo(todo);
  };

  return (
    <div className="relative mx-auto flex w-1/2 items-center">
      <Input emit={addTodo} change={valChange} showIcon={true} />
    </div>
  );
};
