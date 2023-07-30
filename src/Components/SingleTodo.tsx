import React from 'react'
import { Todo } from './Model'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
    todoItem : Todo[]
    setTodoItem :  React.Dispatch<React.SetStateAction<Todo[]>>
    item : Todo
}

const SingleTodo = ({todoItem, setTodoItem, item} : Props) => {
  return (
    <>
      <form className='todo-form'>
        <span className='todo-item'>{item.todo}</span>
        <div>
            <span className='icons'><AiFillEdit/></span>
            <span className='icons'><AiFillDelete/></span>
            <span className='icons'><MdDone/></span>
        </div>
      </form>
    </>
  )
}

export default SingleTodo
