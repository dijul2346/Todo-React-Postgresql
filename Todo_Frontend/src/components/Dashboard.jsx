import { useEffect, useState } from "react";
import axios from "axios";
import { useTodos } from "../Hooks/fetch";
import { SearchBar } from "./search";
import { AddBar } from "./addTodo";
import { TodoList } from "./todoList";

function Dashboard() {
  const { todos, alltodos, setTodos, setAlltodos, fetchTodos } = useTodos();
  return (
    <div>
      <SearchBar todos={todos} alltodos={alltodos} setTodos={setTodos}></SearchBar>
      <AddBar fetchTodos={fetchTodos}></AddBar>
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}
export default Dashboard;

