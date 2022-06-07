import React, { useContext } from "react";
import { Context } from "../../index.js";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Card(props) {
  const db = useContext(Context);
  const [employees, loading] = useCollectionData(collection(db, "stuff"));
  console.log(employees);
  console.log(props.position);
  if (loading) return <div className="main">loading</div>;
  return (
    <div className="cards">
      {employees
        .filter((employe) => employe.position.toLowerCase() === props.position)
        .map((employe) => (
          <div key={employe.name} className="WorkerCard">
            <div className="Employee-photo">
              <img src={employe.photo} alt={employe.name} />
            </div>
            <div className="frame">
              <h2 className="Employe-name">{employe.name}</h2>
              <h3 className="Employe-position">{employe.position}</h3>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
