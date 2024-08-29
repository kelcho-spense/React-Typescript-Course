import React from 'react';


const ImageComponent: React.FC = () => {
    const imageUrl = "https://placehold.co/400";
    return <img src={imageUrl} alt="Dynamic Image" />;
};

export default ImageComponent;

// The src attribute of the img element is set dynamically using the imageUrl variable.