import { useEffect, useState, useCallback } from "react";
import axios from "axios";
export function SearchBar({todos,alltodos,setTodos}){

  return(
    <div className="inpt">
        <input type="text" placeholder="Search" id="search" style={{height:"30px",width:"350px",borderRadius:"10px"}} />
        <button onClick={searchTodo}>Search</button>
        <button onClick={clearSearch}>Clear</button>
    </div>
  )

  function searchTodo(){
    let item=document.getElementById("search").value
    item=item.toLowerCase()
    const found=todos.filter(u=>u.title.toLowerCase().includes(item))
    setTodos(found);
    if(item==""){
      setTodos(alltodos)
    }
  }
  function clearSearch(){
    setTodos(alltodos)
  }
}