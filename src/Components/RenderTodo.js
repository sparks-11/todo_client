import React, { useState } from "react";
import { Button, Grid, Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  outerBox: {
    backgroundColor: "aqua",
    textAlign: "center",
    maxHeight: 600,
    minHeight: 200,
    overflowY: "auto",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: 20,
  },
}));

function RenderTodo({ tasks, deleteTask, setState, setIsEdit, setEditId }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={4} className={classes.outerBox}>
        {tasks?.map((i) => {
          return (
            <div className={classes.card} key={i._id.toString()}>
              <div>
                <h2>{i.task}</h2>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="orange"
                  onClick={() => {
                    setIsEdit(true);
                    setState(i.task);
                    setEditId(i._id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    deleteTask(i._id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default RenderTodo;
