import React, { useEffect } from "react";
import axios from "axios";
import { todo_func } from "./Redux/Todoaction";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

function Todos() {
      const todo = useSelector((store) => store.todo.todo);

      const dispatch = useDispatch();
      useEffect(() => {
            axios.get("http://localhost:8080/todolist")
                  .then((res) => dispatch(todo_func(res.data)))
                  .catch((error) => console.log(error));
      }, [dispatch]);
      return (
            <>
                  <div>
                        <TodoInput />
                  </div>
                  <div className="main-todo-div">
                        {todo.map((item, index) => {
                              return <TodoItem item={item} index={index} key={index}/>;
                        })}
                  </div>
            </>
      );
}

export default Todos;
