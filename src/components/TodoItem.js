import React, { useState } from "react";
import { ListItem, IconButton, TextField, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const TodoItem = ({ task, deleteTask, editTask, toggleComplete }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#f5f5f5",
        mb: 1,
        borderRadius: 1,
        p: 1,
      }}
    >
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton onClick={() => toggleComplete(task.id)}>
          {task.completed ? <CheckCircleIcon color="success" /> : <RadioButtonUncheckedIcon />}
        </IconButton>
        {editing ? (
          <TextField
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            fullWidth
          />
        ) : (
          <Typography
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              flex: 1,
            }}
          >
            {task.text}
          </Typography>
        )}
      </Box>
      <Box>
        {editing ? (
          <IconButton
            color="success"
            onClick={() => {
              editTask(task.id, newText);
              setEditing(false);
            }}
          >
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            onClick={() => {
              setEditing(true);
              setNewText(task.text);
            }}
          >
            <EditIcon />
          </IconButton>
        )}
        <IconButton color="error" onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
