import React from 'react';

const FragmentComponent: React.FC = () => {
  return (
    <>
      <h1>Title</h1>
      <p>This is a paragraph.</p>
    </>
  );
};

export default FragmentComponent;

//1. Returning a Single Parent Element: All elements are wrapped inside a single div 
// element, fulfilling the requirement of returning a single JSX element.

//2. Using React Fragments: React fragments (<>...</>) allow you 
// to group multiple elements without adding an extra node to the DOM.