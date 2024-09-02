import React from 'react';

const OnClickExample: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('Div clicked!');
    };

    return <div onClick={handleClick}>Click this div</div>;
};

export default OnClickExample;