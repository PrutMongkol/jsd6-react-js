import React from "react";
import "./App.css";

function App() {
  return <div id="app">
    <RegistrationForm />
    <DisplayMember />
  </div>;
}

const RegistrationForm = () => {
  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form id="registrationForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const DisplayMember = () => {
  const members = [
    {
      name: 'Adam Smith',
      email: 'a.smith@example.com',
    },
    {
      name: 'Jane Baker',
      email: 'j.baker@example.com'
    },
  ];
  const memberList = members.map( e => {
    return (
      <div key={e.name} className="member">
        {e.name} ({e.email})
      </div>
    );
  });
      
  return (
    <div className="members">
      <h2>Registered Members</h2>
      {memberList}
      {/* <div className="member">{members[0].name} ({members[0].email})</div>
      <div className="member">{members[1].name} ({members[1].email})</div> */}
    </div>
  );
};

export default App;
