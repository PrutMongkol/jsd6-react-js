import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import { UpdateForm, CreateForm } from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [reload, setReload] = useState(false);

  // started life cycle here
  useEffect(() => {
    const getData = async () => {
      const getResponse = await axios.get("https://jsd5-mock-backend.onrender.com/members");
      
      if (getResponse.status === 200 && getResponse.data) {
        console.log(getResponse.data);
        setMembers([...getResponse.data]);
      }
    }

    getData();
  }, [reload]);

  // update here
  const updateData = async (id, name, lastname, position) => {
    const data = {
      id: id,
      name: name,
      lastname: lastname,
      position: position,
    }

    const putResponse = await axios.put("https://jsd5-mock-backend.onrender.com/members", data);

    if (putResponse.status === 200) {
      setReload(!reload);
    }
  }

  // create here
  const createData = async (name, lastname, position) => {
    const data = {
      name: name,
      lastname: lastname,
      position: position,
    }

    const postResponse = await axios.post("https://jsd5-mock-backend.onrender.com/members", data);

    if (postResponse.status === 200) {
      setReload(!reload);
    }
  }

  return (
    <div className="container">
      <p>Create Data:</p>
      <CreateForm submitHandler={createData} />
      <p>Update Data:</p>
      <UpdateForm submitHandler={updateData} />
      <div className="card-container">
        {members.map((member) => (
          <Card
            id={member.id}
            name={member.name}
            lastname={member.lastname}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
