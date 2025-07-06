import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [alltodos, setAlltodos] = useState([]);

  const fetchTodos = useCallback(() => {
    axios.get("http://localhost:3000/todos", {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    }).then(function (res) {
      setTodos(res.data);
      setAlltodos(res.data);
    });
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { todos, alltodos, setTodos, setAlltodos, fetchTodos };
}