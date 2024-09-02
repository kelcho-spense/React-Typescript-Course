// import React, { useState } from 'react';

// const TodoList: React.FC = () => {
//     const [todos, setTodos] = useState<string[]>([]); // all TODOs

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const IValue: string = event.target[0].value;

//         if (IValue == '') {
//             alert('Please enter a todo');
//             return;
//         }
//         setTodos([...todos, IValue]);
     
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Enter todo"
//                 />
//                 <button type="submit">Add Todo</button>
//             </form>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>{todo}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;

import React, { useState } from 'react';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]); // all TODOs

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const input = form.querySelector('input[type="text"]') as HTMLInputElement;

        const IValue: string = input.value.trim();

        if (IValue === '') {
            alert('Please enter a todo');
            return;
        }

        setTodos([...todos, IValue]);
        input.value = ''; // Clear the input field after submitting
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter todo"
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
