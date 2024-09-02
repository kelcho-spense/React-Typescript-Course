import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

const CreateTodo: React.FC = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(MyContext)!;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default CreateTodo;
