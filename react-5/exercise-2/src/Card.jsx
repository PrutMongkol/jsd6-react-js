// const Card = ({ age, name, id, status, weight }) => {
//   return (
//     <div className="card">
//       <div className="label">Age: {age}</div>

//       <div className="label">ID: {id}</div>

//       <div className="label">Name: {name}</div>

//       <div className="label">Status: {status}</div>

//       <div className="label">Weight: {weight}</div>
//     </div>
//   );
// };

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
