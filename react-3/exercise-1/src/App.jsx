import React, { useState } from 'react';

function App() {
    // adding state here.
  const [choices, setChoices] = useState();

  const handleClick = (value) => {
    // code here.
    setChoices(value);
  };

  return (
    <div>
      <button onClick={() => handleClick("Fullname")}>Fullname</button>
      <button onClick={() => handleClick("Age")}>Age</button>
      <button onClick={() => handleClick("Picture")}>Picture</button>
      <DisplayInfo choice={choices} />
    </div>
  );
}

function DisplayInfo(props) {

  let element;

  if (props.choice === 'Fullname') {
    element = <h2>John Doe</h2>;
  } else if (props.choice === 'Age') {
    element = <h2>30</h2>;
  } else if (props.choice === 'Picture') {
    element = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    element = <p>Please select an option.</p>;
  }

  return (
    <div>
      {element}
    </div>
  );
}

export default App;
