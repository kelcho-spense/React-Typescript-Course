import React, { useRef } from 'react';

const ExampleComponent: React.FC = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    console.log(usernameRef.current?.value) //nothing will be output because there is no rerendering

    const handleLog = () => {
        if (usernameRef.current && passwordRef.current) {
            console.log("username :" + usernameRef.current.value);
            console.log("password :" + passwordRef.current.value);
        }
    }

    return (
        <>
        <input ref={usernameRef} type="text" placeholder='username' />
        <input ref={passwordRef} type="text" placeholder='password' />
        <button onClick={handleLog}>Log Value</button>
        </>
    );
};

export default ExampleComponent;

// useRef Hook: useRef is used to create a reference to a DOM element or any other value.
// usernameRef && passwordRef: This ref can be passed to a JSX element's ref attribute, which allows direct manipulation of the element.