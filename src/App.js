import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import 'antd/dist/antd.css';
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [stat, setStat] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (stat) {
        case "completed":
          setFiltered(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFiltered(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFiltered(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, stat]);

  return (
    <div className="App">
      
      <Form todos={todos} setTodos={setTodos} todo={todos.todo}></Form>
      <ul className="todo-list">
        {filtered.map((todo) => (
          <TodoList
            stat={stat}
            key={todo.id}
            todo={todo}
            value={todo.value}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    <Footer todos={todos} setTodos={setTodos} stat={stat} setStat={setStat}></Footer>
    
    </div>
  );
}

export default App;
