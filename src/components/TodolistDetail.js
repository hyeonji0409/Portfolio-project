import React from 'react';
import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';



function TodolistDetail() {
    const [todos, setTodos] = useState([
        
      ]);
    
      // 고유 값으로 사용될 id
      // ref를 사용하여 변수 담기
      const nextId = useRef(4); //현재 id가 3까지. nextId는 4
      // useRef를 통해 만든 객체 안의 current 값이 실제 DOM 요소를 가리킴

    const onInsert = useCallback(
        (text) => {
          const todo = {
            id: nextId.current,
            text,
            checked: false
          };
          setTodos(todos.concat(todo));
          nextId.current += 1; // nextId 1씩 증가
        }, [todos]
      );
    
      const onRemove = useCallback(
        (id) => {
          setTodos(todos.filter((todo) => todo.id !== id));
        }, [todos]
      );
    
      // id 값이 같을 때는 규칙대로 새로운 객체 생성하지만
      // id 값이 같을 때는 처음 받아온 상태 그대로 반환
      const onToggle = useCallback(
        (id) => {
          setTodos(
            // todos.map((todo) => ({
            //   ...todo, checked: todo.id === id ? !todo.checked : todo.checked
            todos.map((todo) =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
          )
        },
        [todos]
      );

    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </TodoTemplate>
        </div>
    );
};

export default TodolistDetail;
