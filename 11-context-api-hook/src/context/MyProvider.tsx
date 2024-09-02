import React, { useState } from 'react';
import MyContext, { ITodo } from './MyContext';

interface IChildren {
    children: React.ReactNode;
}

const MyProvider: React.FC<IChildren> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (task: string) => {
        setTodos([...todos, { id: Date.now(), task, completed: false }]);
    };

    const updateTodo = (id: number, task: string) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, task } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <MyContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
