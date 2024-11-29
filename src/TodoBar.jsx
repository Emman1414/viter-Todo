import React from "react";

const TodoBar = ({ listTodo, setListTodo, value, setValue }) => {
  const refTodo = React.useRef(null);
  const [msg, setMsg] = React.useState("");

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (refTodo.current.value === " ") {
      alert("Empty");
    } else {
      setListTodo([
        ...listTodo,
        {
          todo: refTodo.current.value,
        },
      ]);
      refTodo.current.value = "";
    }
  };

  const displayMsg = (event) => {
    setMsg(value);
    event.current.value(false);
  };

  return (
    <>
      <div className="todo-input rounded-md ">
        <form action="">
          <label htmlFor="" className="mb-1.5 block">
            What to-do:
          </label>
          <input
            type="text"
            placeholder="Type here..."
            className="px-2 py-3 rounded-md border 
                border-black-200 text-black w-full outline-none mb-4"
            ref={refTodo}
            onChange={handleValue}
            msg={msg}
          />

          <button
            className="px-2 py-1 rounded-md bg-green-800 border border-green-800 text-white w-full hover:bg-transparent"
            type="reset"
            onClick={() => {
              handleAddTodo();
              displayMsg();
            }}
            disabled={!value}
          >
            Add to To-Do
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoBar;
