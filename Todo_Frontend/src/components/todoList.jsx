import { useEffect, useState, useCallback } from "react";
import axios from "axios";
export function TodoList({todos,fetchTodos}){
  return(
  <div id="todo">
        {todos.map((todo) => (
          <div className="disp" key={todo.id}>{todo.title}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
    </div>
  )

  function deleteTodo(id) {
    axios.delete(`http://localhost:3000/todo/${id}`, {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    }).then(() => {
      fetchTodos();
    });
  }
}