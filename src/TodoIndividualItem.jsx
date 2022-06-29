import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import "./style.css";
import {useDispatch} from "react-redux";
import { upated_fun } from "./Redux/Todoaction";

function TodoIndividualItem() {
      const dispatch = useDispatch();
      const navigate = useNavigate()
      const [edit, setEdit] = useState(false);
      const { id } = useParams();
      const [item, setItem] = useState({});
      const [newtodo, setNewtodo] = useState("");
      useEffect(() => {
            axios.get(`http://localhost:8080/todolist/${id}`)
                  .then((res) => setItem(res.data))
                  .catch((error) => console.error(error));
      }, [id]);

      const handleedit = () => {
            setEdit(true);
      };
      const handledoneedit = () => {
            axios.patch(`http://localhost:8080/todolist/${id}`,{title : newtodo})
            .then((res)=> dispatch(upated_fun()))
            .then(()=> navigate("/todos"))
            .catch((error)=>console.error(error));
            setEdit(false);
      };
      return (
            <div className="todo-div-item" key={item.id}>
                  <p>
                        <span>{item.title}</span>
                        <span style={{ marginLeft: "10px" }}></span>
                  </p>
                  {edit && (
                        <div>
                              <input
                                    onChange={(e) => setNewtodo(e.target.value)}
                                    type="text"
                                    placeholder="edit todo..."
                              />
                              <button onClick={handledoneedit}>Done</button>
                        </div>
                  )}
                  {!edit && (
                        <button onClick={handleedit} className="edit-btn">
                              Edit Todo
                        </button>
                  )}
            </div>
      );
}

export default TodoIndividualItem;
