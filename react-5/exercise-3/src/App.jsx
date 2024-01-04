import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import { Form, DeleteForm} from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };

    getData();
  }, [reload]);

  const removeData = async (id) => {
    const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
    console.log(response);

    if (response.status === 200) {
      setReload(!reload);
    }
  };

  return (
    <div className="container">
      <DeleteForm submitHandler={removeData} data={members} />
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
