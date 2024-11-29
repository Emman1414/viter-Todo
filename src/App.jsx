import React from "react";
import TodoBar from "./TodoBar";
import TodoList from "./TodoList";

const App = () => {
  const [listTodo, setListTodo] = React.useState([]);

  const [value, setValue] = React.useState(""); 


  return (
    <>
      <section className="min-h-screen bg-red-950 flex justify-center items-center text-white">
        <div className="max-w-[500px] w-full bg-orange-700 rounded-md p-4">
          <h1 className="text-4xl uppercase font-bold text-center">To-Do-List</h1>
          <TodoBar
            listTodo={listTodo}
            setListTodo={setListTodo}
            setValue={setValue}
            value={value}
          />

          <TodoList listTodo={listTodo}
            setValue={setValue} />
        </div>
      </section>
    </>
  );
};

export default App;
