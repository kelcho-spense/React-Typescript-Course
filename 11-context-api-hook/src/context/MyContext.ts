import { createContext } from 'react';

export interface ITodo {
    id: number;
    task: string;
    completed: boolean;
}

interface MyContextType {
    todos: ITodo[];
    addTodo: (task: string) => void;
    updateTodo: (id: number, task: string) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;
