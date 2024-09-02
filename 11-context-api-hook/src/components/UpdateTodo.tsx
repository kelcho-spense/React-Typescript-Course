import React, { useState, useContext } from 'react';
import MyContext, { ITodo } from '../context/MyContext';

interface UpdateTodoProps {
    todo: ITodo;
    onUpdateComplete: () => void;
}

const UpdateTodo: React.FC<UpdateTodoProps> = ({ todo, onUpdateComplete }) => {
    const [newTask, setNewTask] = useState(todo.task);
    const { updateTodo } = useContext(MyContext)!;

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTask.trim()) {
            updateTodo(todo.id, newTask);
            onUpdateComplete(); // Notify that the update is complete
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Update task"
            />
            <button type="submit">Update</button>
            <button type="button" onClick={onUpdateComplete}>Cancel</button>
        </form>
    );
};

export default UpdateTodo;
