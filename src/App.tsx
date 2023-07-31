import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./Components/Model";
import TodoList from "./Components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoItem, setTodoItem] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoItem([...todoItem, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  // console.log(todoItem)

  return (
    <>
      <DragDropContext onDragEnd={() => {}}>
        <div className="container">
          <span className="title">Taskify</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todoItem={todoItem}
            setTodoItem={setTodoItem}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
