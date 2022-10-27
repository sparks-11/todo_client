import React, { useState } from "react";
import { Grid, Button, Input, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  outerBox: {
    backgroundColor: "pink",
    textAlign: "center",
  },
  paddingTop: {
    paddingTop: 10,
  },
  marginRight: {
    marginRight: 10,
  },
}));

function CreateTodo({ addTask, state, setState, isEdit }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.paddingTop}
    >
      <Grid item xs={4} className={classes.outerBox}>
        <div>
          <div>
            <Typography variant="h4" className={classes.paddingTop}>
              Todo App
            </Typography>
            <Typography variant="body1" className={classes.paddingTop}>
              add a new todo
            </Typography>
          </div>
          <div>
            <Input
              variant="outlined"
              name="toto"
              placeholder="Enter todo here"
              type="text"
              value={state}
              className={[classes.paddingTop, classes.marginRight]}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (state !== "") {
                  addTask();
                }
                setState("");
              }}
            >
              {isEdit ? "Update" : "Add"}
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default CreateTodo;
