import { useState } from "react";
import { Button,Input } from "antd";

export const Form = ({ todos, setTodos }) => {
  const allCompleted = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.completed === false) {
          return { ...todo, completed: true };
        } else return { ...todo };
      })
    );
  };

  const [input, setInput] = useState("");
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      alert("hou have to add a todo");
      return false;
    }
    setTodos([
      ...todos,
      { value: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };

  return (
    <div>
      <form>
        <h1 className="header">Todos</h1>
        <Button type="primary" shape="circle" className="buttonForm" onClick={allCompleted}>X</Button>
        <Input
          placeholder="What needs to be done?"
          value={input}
          onChange={onChangeHandler}
          className="inputType"
        ></Input>
        
        <Button type="primary" shape="circle" className="buttonForm" onClick={onSubmit}>add</Button>
      </form>
    </div>
  );
};
