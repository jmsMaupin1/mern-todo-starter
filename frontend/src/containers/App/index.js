import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const listTodos = () => {
    
  };

  const createTodo = (todo) => {
    
  };

  const updateTodo = (id, todo) => {
    
  };

  const deleteTodo = (id) => {
    
  };

  const toggleCompleted = (index) => {
    
  };

  useEffect(() => {
    listTodos();
  }, []);

  return (
    <>
      <Header onTodoSubmit={createTodo} />
      <TodoList
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
