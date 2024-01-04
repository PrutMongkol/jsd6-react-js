const Card = ({ id, name, lastname, position }) => {
  return (
    <div className="card">
      <div className="label">ID: {id}</div>

      <div className="label">Name: {name}</div>

      <div className="label">Lastname: {lastname}</div>

      <div className="label">Position: {position}</div>
    </div>
  );
};

export default Card;
