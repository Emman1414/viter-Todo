import React from "react";

const TodoList = ({ listTodo, setValue, value }) => {
  return (
    <>
      <div className="list-todo mt-5 overflow-hidden flex-wrap">
        <ul className="max-w-[500px]">
          {listTodo !== 0 ? (
            listTodo.map((item, key) => (
              <li className="p-2 border-b mb-1 flex " key={key}>
                • {item.todo}
              </li>
            ))
          ) : (
            <h3>Nothing to Do</h3>
          )}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
