import React, { useRef } from 'react'


interface Props {
    todo : string;
    setTodo :  React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e : React.FormEvent)=> void
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
 const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <form className='input-field' onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur(); }}>
        <input type="text" className='input-task' value={todo} ref={inputRef}  onChange={(e)=> setTodo(e.target.value)}  placeholder='Enter a task'/>
        <button type='submit' className='submit-btn'>
            Go
        </button>
      </form>
    </>
  )
}

export default InputField
