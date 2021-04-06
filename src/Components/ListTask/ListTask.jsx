import React from "react";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchTask } from "../../Actions";
function ListTask({ toDo_task, index }) {
    const todos = useSelector((state) => state.todosReducer.todos);
    const filter = useSelector((state) => state.todosReducer.filter);
    console.log("filter", filter);
    const dispatch = useDispatch();
    const handleClick = (input) => {
        // dispatching the toggle task action
        dispatch(searchTask({ filter: input }));
    };
    console.log("todos", todos);
    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button
                    variant="outline-success"
                    onClick={() => handleClick("done")}
                >
                    Show Done
                </Button>
                <Button
                    variant="outline-danger"
                    onClick={() => handleClick("notdone")}
                >
                    {" "}
                    Show Not Done
                </Button>
                <Button variant="info" onClick={() => handleClick("all")}>
                    Remove All Filters
                </Button>
            </div>
            {filter === "done"
                ? todos
                      .filter((task) => task.isDone === true)
                      .map((task, index) => (
                          <Task toDo_task={task} key={index} index={index} />
                      ))
                : filter === "notdone"
                ? todos
                      .filter((task) => task.isDone === false)
                      .map((task, index) => (
                          <Task toDo_task={task} key={index} index={index} />
                      ))
                : todos.map((task, index) => (
                      <Task toDo_task={task} key={index} index={index} />
                  ))}
        </div>
    );
}

export default ListTask;
