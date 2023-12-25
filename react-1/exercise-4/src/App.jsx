import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay />
    </div>
  );
}

const RunningForm = () => {
  return (
    <>
      <form id="data-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" /><br /><br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" /><br /><br />

        <label htmlFor="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" /><br /><br />

        <button type="button" onClick="addData()">Add Data</button>
      </form>
    </>
  );
};

const TableDisplay = () => {
  const runners = [
    {
      name: 'John',
      age: 'Doe',
      weight: 69,
      time: 30,
      isGoodRunning: false,
    },
    {
      name: 'Jane',
      age: 'Erye',
      weight: 45,
      time: 20,
      isGoodRunning: true,
    },
    {
      name: 'Peter',
      age: 'Griffin',
      weight: 100,
      time: 60,
      isGoodRunning: false,
    },
  ];

  const runnerList = runners.map( e => {
    return (
      <tr key={e.name}>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.weight}</td>
        <td>{e.time}</td>
        <td>{e.isGoodRunning ? 'Yes' : 'No'}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Current Running (Minutes)</th>
          <th>Good Running</th>
        </tr>
        {runnerList}
      </table>
    </>
  );
};

export default App;
