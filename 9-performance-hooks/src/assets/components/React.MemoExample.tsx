import React, { useState } from 'react';

const ChildComponent: React.FC<{ name: string }> = ({ name }) => {
    console.log('Child rendered');
    return <p>{name}</p>;
};

const MemoizedChild = React.memo(ChildComponent);

const ReactMemoExample: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [name, setName] = useState<string>('John Doe');
    const [age, setAge] = useState<number>(30);

    return (
        <div>
            <button onClick={() => setAge(age + 1)}>Increment Age {age}</button>
            <MemoizedChild name={name} />
        </div>
    );
};

export default ReactMemoExample;