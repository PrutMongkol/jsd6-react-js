import React from "react";
import "./App.css";

// function App() {
//   return (
//     <div id="app">
//       <RegistrationForm />
//       <DisplayMember />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <RegistrationForm />
        <DisplayMember />
      </div>
    );
  }
}

class RegistrationForm extends React.Component {
  render() {
    return (
      // code here
      <div>
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
  }
}

// create Class DisplayMember here
class DisplayMember extends React.Component {
  render() {
    const people = [
      "John Doe (john@example.com)",
      "Jane Smith (jane@example.com)",
    ];
    return (
      <div className="members">
        <h2>Registered Members</h2>
        <div className="member">{people[0]}</div>
        <div className="member">{people[1]}</div>
      </div>
    );
  }
}

export default App;
