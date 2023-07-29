import React from 'react'

const InputField :React.FC = () => {
  return (
    <>
      <form className='input-field'>
        <input type="text" className='input-task'  placeholder='Enter a task'/>
        <button type='submit' className='submit-btn'>
            Go
        </button>
      </form>
    </>
  )
}

export default InputField
