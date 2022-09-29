import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Input = (props: any) => {
  const [val, setVal] = useState("");

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      emitVal(event);
    }
  };

  const emitVal = (event) => {
    event.preventDefault();
    props.emit(val);
    reset();
  };

  const changeVal = (event) => {
    event.preventDefault();
    props.change(val);
  };

  const handleInput = (event) => {
    setVal(event.target.value);
    changeVal(event);
  };

  const reset = () => setVal("");

  return (
    <>
      <input
        className="box-border w-full pr-6"
        type="text"
        onChange={handleInput}
        value={val}
        onKeyPress={handleKeyPress}
      />
      {props.showIcon && (
        <FontAwesomeIcon
          className="absolute right-1.5 box-border p-1 hover:cursor-pointer hover:text-green-400"
          onClick={emitVal}
          icon={faPlus}
        />
      )}
    </>
  );
};
