import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import UpdateTodo from './UpdateTodo';

const TodoList: React.FC = () => {
    const { todos, deleteTodo, toggleTodo } = useContext(MyContext)!;
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

    const handleEdit = (id: number) => {
        setEditingTodoId(id);
    };

    const handleUpdateComplete = () => {
        setEditingTodoId(null);
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {editingTodoId === todo.id ? (
                        <UpdateTodo todo={todo} onUpdateComplete={handleUpdateComplete} />
                    ) : (
                        <>
                            <span 
                                onClick={() => toggleTodo(todo.id)} 
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            >
                                {todo.task}
                            </span>
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
