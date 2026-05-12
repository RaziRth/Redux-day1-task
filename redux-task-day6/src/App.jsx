import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  editTodo,
} from './features/todos/todoSlice';
import {
  selectTodos,
  selectTodoCount,
} from './features/todos/todoSelectors';

function App() {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const count = useSelector(selectTodoCount);

  const handleSubmit = () => {
    if (!text.trim()) return;

    if (editingId) {
      dispatch(
        editTodo({
          id: editingId,
          text,
        })
      );
      setEditingId(null);
    } else {
      dispatch(addTodo(text));
    }

    setText('');
  };
   const handleEdit = (todo) => {
    setText(todo.text);
    setEditingId(todo.id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <h3>Total Tasks: {count}</h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleSubmit}>
        {editingId ? 'Update Task' : 'Add Task'}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => handleEdit(todo)}>
              Edit
            </button>

            <button
              onClick={() =>
                dispatch(deleteTodo(todo.id))
              }
            >
              Delete
            </button>
          </li>
           ))}
      </ul>
    </div>
  );
}

export default App;