import './App.css'
import React from 'react';
import MyProvider from './context/MyProvider';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <MyProvider>
      <h1>Todo App</h1>
      <CreateTodo />
      <TodoList />
    </MyProvider>
  )
}

export default App
