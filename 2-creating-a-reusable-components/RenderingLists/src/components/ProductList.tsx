import React from 'react'

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 },
    { id: 3, name: 'Tablet', price: 299 }
];

const ProductCard: React.FC<Product> = ({ id, name, price }) => {
    return (
        <div key={id} style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '8px' }}>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};

const ProductList = () => {
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductList

// The ProductCard component represents a single product.
// The ProductList component maps over the products array, creating a ProductCard for each product.
// The key prop is used on ProductCard to uniquely identify each component in the list (discussed in the next section).

// Keys are a special string attribute you need to include when creating lists of elements in React. 
// They help React identify which items have changed, been added, or removed, and optimize rendering performance.