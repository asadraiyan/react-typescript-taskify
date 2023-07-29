import React from 'react';
import './App.css';
import InputField from './Components/InputField';

const App : React.FC = () => {

  return (
    <>
   <div className="container">
    <span className='title'>Taskify</span>
    <InputField/>
   </div>
    </>
  );
}

export default App;
