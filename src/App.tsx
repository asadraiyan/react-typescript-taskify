import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/Model';
import TodoList from './Components/TodoList';

const App : React.FC = () => {

  const [todo, setTodo] = useState <string>("")
  const [todoItem, setTodoItem] = useState <Todo[]>([])

  const handleAdd = (e : React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodoItem([...todoItem, {id : Date.now(), todo, isDone : false}])
      setTodo("")
    }

  }
  // console.log(todoItem)

  return (
    <>
   <div className="container">
    <span className='title'>Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
    <TodoList todoItem = {todoItem} setTodoItem = {setTodoItem}/>
   </div>
    </>
  );
}

export default App;
