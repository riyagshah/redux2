import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useDispatch } from "react-redux";
import { post_todo } from "./Redux/Todoaction";

function TodoInput() {
      const [item, setItem] = useState("");
      const dispatch = useDispatch();
      const handleaddtodo = () => {
            const payload = {
                  id: uuidv4(),
                  title: item,
                  status: false,
            };
            axios.post("http://localhost:8080/todolist", payload)
                  .then((res) => dispatch(post_todo(res.data)))
                  .catch((error) => console.error(error));
      };
      return (
            <div>
                  <input
                        type="text"
                        placeholder="write todo.."
                        onChange={(e) => setItem(e.target.value)}
                  />
                  <button onClick={handleaddtodo}>Add Todo</button>
            </div>
      );
}

export default TodoInput;
