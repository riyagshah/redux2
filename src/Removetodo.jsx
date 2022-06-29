import React from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { delete_todo } from './Redux/Todoaction';

function Removetodo({id}) {
    const dispatch = useDispatch()
    const handleRemove = ()=> {
        axios.delete(`http://localhost:8080/todolist/${id}`)
        .then(()=> dispatch(delete_todo(id)))
        .catch((error)=> console.error(error));
    }
  return (
    <div>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default Removetodo