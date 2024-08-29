import React from 'react';


const StyledComponent: React.FC = () => {
    const isActive = true;
    const style = {
        color: isActive ? 'green' : 'red',
        fontSize: '20px'
    };
    return <h1 style={style}>Styled Text</h1>;
};


export default StyledComponent;

// The style attribute is used to apply inline styles.
// The object inside the first set of curly braces contains the CSS properties, 
// while the outer curly braces are required by JSX to evaluate the JavaScript expression.