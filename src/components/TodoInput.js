import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    addTask(task);
    setTask("");
  };

  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 3 }}>
      <TextField
        label="Add a task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
