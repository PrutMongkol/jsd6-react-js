import React, { useState, useEffect } from 'react';

// no useEffect
// const App = () => {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [image, setImage] = useState('');
    
//     const [renderOption, setRenderOption] = useState();

//     return (
//         <>
//             <input
//                 type='text'
//                 placeholder='Full name'
//                 onChange={(ev) => {
//                     setName(ev.target.value);
//                 }}
//             ></input>
//             <input
//                 type='text'
//                 placeholder='Age'
//                 onChange={(ev) => {
//                     setAge(ev.target.value);
//                 }}
//             ></input>
//             <input
//                 type='text'
//                 placeholder='Image'
//                 onChange={(ev) => {
//                     setImage(ev.target.value);
//                 }}
//             ></input>
//             <button
//                 onClick={() => setRenderOption('fullname')}>
//                 Full name
//             </button>
//             <button
//                 onClick={() => setRenderOption('age')}>
//                 Age
//             </button>
//             <button
//                 onClick={() => setRenderOption('image')}>
//                 Image
//             </button>
//             { renderOption === 'fullname' &&
//                 <h2>{name}</h2>
//             }
//             { renderOption === 'age' &&
//                 <h2>{age}</h2>
//             }
//             { renderOption === 'image' &&
//                 <img src={image} alt="" />
//             }
//         </>
//     );
// }

//with useEffect
const App = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');
    
    const [renderOption, setRenderOption] = useState();

    const [htmlElement, setHtmlElement] = useState('');

    useEffect(() => {
        if (renderOption === 'fullname') {
            setHtmlElement(<h2>{name}</h2>)
        } else if (renderOption === 'age') {
            setHtmlElement(<h2>{age}</h2>)
        } else if (renderOption === 'fullname') {
            setHtmlElement(<img src={image} alt="" />)
        }
    }, [renderOption]);

    return (
        <>
            <input
                type='text'
                placeholder='Full name'
                onChange={(ev) => {
                    setName(ev.target.value);
                }}
            ></input>
            <input
                type='text'
                placeholder='Age'
                onChange={(ev) => {
                    setAge(ev.target.value);
                }}
            ></input>
            <input
                type='text'
                placeholder='Image'
                onChange={(ev) => {
                    setImage(ev.target.value);
                }}
            ></input>
            <button
                onClick={() => setRenderOption('fullname')}>
                Full name
            </button>
            <button
                onClick={() => setRenderOption('age')}>
                Age
            </button>
            <button
                onClick={() => setRenderOption('image')}>
                Image
            </button>
            {htmlElement}
        </>
    );
}

export default App;