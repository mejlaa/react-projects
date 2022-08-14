import React, { useState } from "react";
import "./todo.css";

const FormToDo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [category, setCategory] = useState("All");

  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const addHandler = () => {
    setTaskList([
      ...taskList,
      {
        id: Math.floor(Math.random() * 10000),
        taskName: taskInput,
        complited: "Unmarked",
      },
    ]);
    console.log(taskList);
  };

  const deleteHandler = (id) => {
    const newTaskList = taskList.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setTaskList(newTaskList);
  };

  const markedHandler = (id) => {
    const markedList = taskList.map((item) => {
      if (item.id === id) {
        if (item.complited === "Unmarked") item.complited = "Marked";
        else {
          item.complited = "Unmarked";
        }
      }
      return item;
    });
    setTaskList(markedList);
  };

  const optionHandlerAll = (e) => {
    setCategory("All");
  };
  const optionHandlerMark = (e) => {
    setCategory("Marked");
  };
  const optionHandlerUnmark = (e) => {
    setCategory("Unmarked");
  };
  return (
    <div>
      {category}
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskInput.taskName}
        onChange={taskInputHandler}
      />
      <button onClick={addHandler}>Add</button>
      <div>
        <div onClick={optionHandlerAll}>all</div>{" "}
        <div onClick={optionHandlerMark}>marked</div>
        <div onClick={optionHandlerUnmark}>unmarked</div>
      </div>
      {/* <select>
        <option value="all" onClick={optionHandlerAll}>
          All
        </option>
        <option value="marked" onChange={optionHandlerMark}>
          Marked
        </option>
        <option value="unmarked" onClick={optionHandlerUnmark}>
          Unmarked
        </option>
      </select> */}

      {taskList.map((item, index) => {
        return (
          <div
            className={
              item.complited !== category && category !== "All" ? "non" : "yes"
            }
          >
            <div
              className={item.complited === "Unmarked" ? "unmarked" : "marked"}
              key={index}
            >
              {item.taskName}
            </div>
            <button
              onClick={() => {
                deleteHandler(item.id);
              }}
            >
              Del
            </button>
            <button
              onClick={() => {
                markedHandler(item.id);
              }}
            >
              Comp
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FormToDo;
