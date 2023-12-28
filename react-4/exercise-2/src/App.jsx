import React, { useState, useEffect } from 'react';

const peopleData = [
  {
      name: 'John',
      organization: 'ABC Inc.',
      position: 'Developer',
  },
  {
      name: 'Jane',
      organization: 'XYZ Corp.',
      position: 'Designer',
  },
  {
      name: 'Bob',
      organization: '123 LLC',
      position: 'Manager',
  },
];

function App() {
  const [people, setPeople] = useState(peopleData);
  const [name, setName] = useState();
  const [organization, setOrganization] = useState();
  const [position, setPosition] = useState();

  const repopulatePeople = () => {
    setPeople(peopleData);
  };

  useEffect(repopulatePeople, []);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleOrganization = ({ target }) => {
    setOrganization(target.value);
  };

  const handlePosition = ({ target }) => {
    setPosition(target.value);
  };

  const handleSave = () => {
    const newPerson = {
      name: name,
      organization: organization,
      position: position,
    }

    setPeople((prevPeople) => [...prevPeople, newPerson]);

    setName('');
    setOrganization('');
    setPosition('');
  };

  return (
    <div className="App"> {/* Add class name */}
      <h1>Table Example</h1>
      <div>
        <input type="text" placeholder="Type new name here" style={{margin: '4px'}} value={name} onChange={handleName} />
        <input type="text" placeholder="Type new organization here" style={{margin: '4px'}} value={organization} onChange={handleOrganization} />
        <input type="text" placeholder="Type new position here" style={{margin: '4px'}} value={position} onChange={handlePosition} />
        <button style={{margin: '4px'}} onClick={handleSave}>
          Save
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {
            people.map((element) => {
              return (
                <tr>
                  <td>{element.name}</td>
                  <td>{element.organization}</td>
                  <td>{element.position}</td>
                </tr> 
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
