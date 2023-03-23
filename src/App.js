import React, { useState, useEffect } from "react";
import CreateTodo from "./Components/CreateTodo";
import RenderTodo from "./Components/RenderTodo";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState();
  const [state, setState] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const fetchTasks = async () => {
    try {
      await axios({
        method: "get",
        url: "http://localhost:7000/tasks",
      }).then((res) => setTasks(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try {
      if (isEdit) {
        editTask(editId, {
          task: state,
          completed: false,
          date: "empty",
        });
      } else if (state !== "") {
        await axios({
          method: "post",
          url: "http://localhost:7000/addTask",
          data: {
            task: state,
            completed: false,
            date: "empty",
          },
        }).then((res) => fetchTasks());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (id, data) => {
    try {
      await axios.put(`http://localhost:7000/${id}`, data).then((res) => {
        fetchTasks();
        setEditId("");
        setIsEdit(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios
        .delete(`http://localhost:7000/${id}`)
        .then((res) => fetchTasks());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <CreateTodo
        addTask={addTask}
        state={state}
        isEdit={isEdit}
        setState={setState}
      />
      <RenderTodo
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        setState={setState}
        setIsEdit={setIsEdit}
        setEditId={setEditId}
      />
    </>
  );
}

export default App;
