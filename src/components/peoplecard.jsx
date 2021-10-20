import React from "react";

let Peoplecard = ({ user }) => {
  return (
    <div className="col-md-6" key={"user-card-${user.id}"}>
      <div className="card shadow my-2">
        <div className="card-body">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-subtitle text-muted">Gender: {user.gender}</p>
          <p className="card-subtitle text-muted">Age: {user.age}</p>
          <p className="card-subtitle text-muted">
            Eye Color: {user.eye_color}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            Hair Color: {user.hair_color}
          </p>
          <a href={user.films} className="card-link">
            Film
          </a>
          <a href={user.species} className="card-link">
            Species
          </a>
          <a href={user.url} className="card-link">
            URL
          </a>
        </div>
      </div>
    </div>
  );
};

export default Peoplecard;
