import React, { useState, useCallback } from 'react';

// Child component to add a new item
const AddItem: React.FC<{ onAddItem: () => void }> = React.memo(({ onAddItem }) => {
    console.log('AddItem rendered');
    return <button onClick={onAddItem}>Add Item</button>;
});

// Parent component managing the list of items
const ItemList: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [count, setCount] = useState(0);

    // Memoized callback to add a new item to the list
    const handleAddItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    }, []); // Empty dependency array: this callback doesn't change

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Counter</button>
            <AddItem onAddItem={handleAddItem} />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
