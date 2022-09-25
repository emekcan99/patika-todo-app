import { Radio,Button  } from "antd";
import { useState } from "react";

export const Footer = ({todos, setTodos, stat, setStat}) => {
  const [value, setValue] = useState(1);

  const unCompleted = todos.filter((todo) => todo.completed === false);
  const completed = todos.filter((todo) => todo.completed === false);

  const clickHandler = (e) =>{
    setStat(e.target.id);
  
  }
  const clearCompleted = (e) => {
    e.preventDefault()
    setTodos(todos.filter((todo) => todo.completed === false  ))
  }
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        items left
      </span>

      <Radio.Group onChange={onChange} value={value}>
      <Radio onClick={clickHandler} id="all" value={1}>all</Radio>
      <Radio onClick={clickHandler} id="active" value={2}>active</Radio>
      <Radio onClick={clickHandler} id="completed" value={3}>completed</Radio>
    </Radio.Group>
    <br></br>
    <br></br>
      <Button onClick={clearCompleted} className="footerButton">Clear completed</Button>
    </footer>
  );
};
