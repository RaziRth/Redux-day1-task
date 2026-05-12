import todoReducer, {
  addTodo,
  deleteTodo,
  editTodo,
} from './todoSlice';

describe('todoSlice', () => {
  test('should add a todo', () => {
    const state = {
      items: [],
    };

    const newState = todoReducer(
      state,
      addTodo('Learn Redux Toolkit')
    );

    expect(newState.items.length).toBe(1);
    expect(newState.items[0].text).toBe('Learn Redux Toolkit');
  });

  test('should delete a todo', () => {
    const state = {
      items: [
        {
          id: 1,
          text: 'Task 1',
        },
      ],
    };

    const newState = todoReducer(
      state,
      deleteTodo(1)
            );
            expect(newState.items.length).toBe(0);
  });

  test('should edit a todo', () => {
    const state = {
      items: [
        {
          id: 1,
          text: 'Old Task',
        },
      ],
    };

    const newState = todoReducer(
      state,
      editTodo({
        id: 1,
        text: 'Updated Task',
      })
    );

    expect(newState.items[0].text).toBe('Updated Task');
  });
});