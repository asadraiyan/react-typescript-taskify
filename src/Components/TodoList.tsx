import React from "react";
import { Todo } from "./Model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todoItem: Todo[];
  setTodoItem: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todoItem,
  setTodoItem,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <>
      <div className="main-container">
        <Droppable droppableId="TodoList">
          {(provided) => (
            <div
              className="todo-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos-heading">Active Tasks</span>
              {todoItem.map((item, index) => (
                <SingleTodo
                  index={index}
                  item={item}
                  key={item.id}
                  todoItem={todoItem}
                  setTodoItem={setTodoItem}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="TodosRemove">
          {(provided) => (
            <div
              className="todo-container remove"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos-heading">Completed Tasks</span>
              {completedTodos.map((item, index) => (
                <SingleTodo
                  index={index}
                  item={item}
                  key={item.id}
                  todoItem={completedTodos}
                  setTodoItem={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default TodoList;
