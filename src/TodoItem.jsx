
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toggle_fun } from "./Redux/Todoaction";
import Removetodo from "./Removetodo";
import "./style.css";

function TodoItem({ item, index }) {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const handleseemore = () => {
            navigate(`/todo/${item.id}`);
      };

      const handleToggle = (todo) => {
            console.log(todo,"toogle handle")
            fetch(`http://localhost:8080/todolist/${todo.id}` , {
                method : "PATCH",
                body : JSON.stringify({
                      ...todo, status : !todo.status
                }),
                headers : {
                     "Content-Type" : "application/json"
                }
            }).then((res) => res.json())
              .then((res) => dispatch(toggle_fun(res)))
              .catch((error) => console.log(error))
        }
      return (
            <div className="todo-div" key={item.id}>
                  <p>
                        {index + 1}. <span>{item.title}</span>
                        <span style={{ marginLeft: "10px" }}>
                              {/* <button onClick={() => setToggole(!toggole)}>
                                    {!toggole ? item.status : "Completed"}
                              </button> */}
                                 <button onClick = {() => handleToggle(item)}>{item.status?"completed":"Not completed"}</button>
                              <button
                                    onClick={handleseemore}
                                    style={{ marginLeft: "10px" }}
                              >
                                    See More
                              </button>
                        </span>
                  </p>
                  <Removetodo id={item.id}/>
            </div>
      );
}

export default TodoItem;
