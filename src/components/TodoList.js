import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
};

export default TodoList;
