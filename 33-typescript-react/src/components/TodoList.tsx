import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';
export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]); //전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); //새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos); //전체 투두에 새로운 투두 추가
    setNewTodo(''); //input 초기화
  };
  //투두 아이템 완료 상태 변경 함수
  const toggleComplete = (id: number) => {
    console.log(`${id}번 투두 완료 상태 수정됨!`);
    const updatedCompleted = todos.map((item) => {
      //   if (id === item.id) {
      //     return { ...item, completed: !item.completed };
      //   }
      //   return item;
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setTodos(updatedCompleted);
  };

  //useRef로 생성한 inputRef를 사용해 입력창에 포커싱
  const focusInput = () => {
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef.current?.focus();
  };

  //key down event 입력시 투두 추가
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="add new todo!"
          ref={inputRef}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}
