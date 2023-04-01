import React, { useRef } from 'react';
import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddTodo(enteredText);
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label>
          Todo text <input type="text" ref={inputRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodo;
