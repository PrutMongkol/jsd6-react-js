import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('Your name here');
    const [bio, setBio] = useState('short bio');


    return (
        <>
            <img src="https://placekitten.com/200" alt="Placeholder" />
            <br />
            <input 
                type='text'
                placeholder='name here'
                aria-label='Name input'
                onChange={({ target }) => setName(target.value)}>
            </input>
            <input 
                type='text'
                placeholder='short bio'
                aria-label='Bio input'
                onChange={({ target }) => setBio(target.value)}>
            </input>
            <Info name={name} bio={bio} />
            <p>
                <a href="#">Facebook</a> <a href="#">Twitter</a>
            </p>
        </>
    );
}

const Info = ({ name, bio }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>{bio}</p>
        </>
    );
}

export default App;