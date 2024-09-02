import React, { useReducer } from 'react';

// Define the types for the state and actions
interface FormState {
  name: string;
  age: number;
  email: string;
}

type Action =
  | { type: 'setName'; payload: string }
  | { type: 'setAge'; payload: number }
  | { type: 'setEmail'; payload: string }
  | { type: 'reset' };

// Define the reducer function
function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setAge':
      return { ...state, age: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'reset':
      return { name: '', age: 0, email: '' };
    default:
      return state;
  }
}

const FormComponent: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: 0, email: '' });

  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
        placeholder="Name"
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) => dispatch({ type: 'setAge', payload: parseInt(e.target.value, 10) })}
        placeholder="Age"
      />
      <input
        type="email"
        value={state.email}
        onChange={(e) => dispatch({ type: 'setEmail', payload: e.target.value })}
        placeholder="Email"
      />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

      <p>
        Name: {state.name}, Age: {state.age}, Email: {state.email}
      </p>
    </div>
  );
};

export default FormComponent;