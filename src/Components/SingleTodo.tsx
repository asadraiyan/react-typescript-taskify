import React, { useState, useRef, useEffect } from "react";
import { Todo } from "./Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todoItem: Todo[];
  setTodoItem: React.Dispatch<React.SetStateAction<Todo[]>>;
  item: Todo;
};

const SingleTodo = ({ todoItem, setTodoItem, item }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);

  const handleDone = (id: number) => {
    setTodoItem(
      todoItem.map((items) =>
        items.id === id ? { ...items, isDone: !items.isDone } : items
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoItem(todoItem.filter((items) => items.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoItem(
      todoItem.map((items) =>
        items.id === id ? { ...items, todo: editTodo } : items
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form className="todo-form" onSubmit={(e) => handleEdit(e, item.id)}>
        {edit ? (
          <input
            type="text"
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todo-item"
          />
        ) : item.isDone ? (
          <s className="todo-item">{item.todo}</s>
        ) : (
          <span className="todo-item">{item.todo}</span>
        )}

        <div>
          <span
            className="icons"
            onClick={() => {
              if (!edit && !item.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span className="icons" onClick={() => handleDelete(item.id)}>
            <AiFillDelete />
          </span>
          <span className="icons" onClick={() => handleDone(item.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
