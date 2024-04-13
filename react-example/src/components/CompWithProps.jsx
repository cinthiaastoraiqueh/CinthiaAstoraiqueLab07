import React, { useState } from 'react';

const CompWithProps = () => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    const handleInputChange = (event) => {
        setText(event.target.value);
    }

    const handleInputSubmit = (event) => {
        if (event.key === 'Enter') {
            setCount(prevCount => prevCount + 1); 
            setText('');
        }
    }

    return (
        <div>
            <h1>HOLA DESDE VITE</h1>
            <p>Count: {count}</p>
            <input type="text" value={text} onChange={handleInputChange} onKeyPress={handleInputSubmit} placeholder="USER" />
            <p>User: {text}</p>
        </div>
    );
}

export default CompWithProps;
