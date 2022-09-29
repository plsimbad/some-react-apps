import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const List = (props: any) => {
  const removeTodo = (index: number) => {
    props.removeTodo(index);
  };

  return (
    <div className="mt-5">
      {props.todoList.map((todo: string, i: number) => {
        return (
          <div
            key={i}
            className="m-auto flex w-1/2 flex-row items-center rounded p-2 hover:bg-slate-800"
          >
            <div className="flex-grow">{todo}</div>
            <FontAwesomeIcon
              className="hover:cursor-pointer hover:text-red-500"
              onClick={() => removeTodo(i)}
              icon={faTimes}
            />
          </div>
        );
      })}
    </div>
  );
};
