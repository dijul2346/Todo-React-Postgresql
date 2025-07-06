import { useEffect, useState, useCallback } from "react";
import axios from "axios";
export function AddBar({fetchTodos}){
    function addTodo() {
    let todo = document.getElementById("inp").value;
    axios.post(
      "http://localhost:3000/todos",
      { title: todo },
      {
        headers: {
          token: localStorage.getItem("authToken"),
        },
      }
    ).then(function(res){
        fetchTodos()
    })
  }
  return(
    <div className="inpt">
        <input type="text" placeholder="todo" id="inp" style={{height:"30px",width:"350px",borderRadius:"10px"}} />
        <button onClick={addTodo}>Create Todo</button>
    </div>
  )
   
}