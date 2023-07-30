import React from 'react'
import { Todo } from './Model';
import SingleTodo from './SingleTodo';

interface Props {
    todoItem : Todo[]
    setTodoItem :  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todoItem, setTodoItem} : Props) => {
  return (
    <>
    <div className="todo-container">
        {todoItem.map((item)=>(
           <SingleTodo item = {item} key={item.id} todoItem = {todoItem} setTodoItem = {setTodoItem}/>
        ))}
    </div>
      
    </>
  )
}

export default TodoList
