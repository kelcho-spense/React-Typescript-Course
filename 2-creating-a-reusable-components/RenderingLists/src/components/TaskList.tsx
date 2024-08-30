import React, { useState } from 'react';

interface Task {
    id: number;
    description: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, description: 'Learn React' },
        { id: 2, description: 'Write Code' },
        { id: 3, description: 'Read a Book' }
    ]);

    const addTask = () => {
        const newTask: Task = { id: tasks.length + 1, description: `New Task ${tasks.length + 1}` };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.description}
                        <button onClick={() => removeTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

export default TaskList;