import { Button } from "antd";
export const TodoList = ({ todos, setTodos, todo }) => {
  
  
  const completedHandle = (e) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteHandle = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  return (
    <li className="todoList">
      <input type="checkbox" className="todoCheck" onClick={completedHandle} defaultChecked={todo.completed}></input>
      {todo.value}     
      <Button className="Button-todo" shape="circle" onClick={deleteHandle}>x</Button>
    </li>
    
  );
};

