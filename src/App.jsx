import React, { useEffect, useState } from "react";
import "./styles.css";
import Peoplecard from "./components/peoplecard";
import Filmcard from "./components/filmcard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [films, setFilms] = useState([]);
  const [showFilms, setshowFilms] = useState(false);
  const [showPeople, setshowPeople] = useState(false);

  useEffect(() => {
    fetch(" https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allUsers) => setUsers(allUsers));
  }, []);

  useEffect(() => {
    fetch(" https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

  return (
    <main className="container">
      <img
        id="studio"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/220px-Studio_Ghibli_logo.svg.png"
        alt=""
      />

      <div id="buttonlist">
        <button id="buttonchange" onClick={() => setshowPeople(true)}>
          People
        </button>
        <button
          id="buttonchange"
          onClick={() => {
            setshowPeople(false);
            setshowFilms(false);
          }}
        >
          Reload
        </button>

        <button id="buttonchange" onClick={() => setshowFilms(true)}>
          Films
        </button>
      </div>
      <>
        <section className="row justify-content-center mt-5">
          {showPeople && users.map((user) => <Peoplecard user={user} />)}
        </section>
        <section className="row justify-content-center mt-5">
          {showFilms && films.map((film) => <Filmcard film={film} />)}
        </section>
      </>
    </main>
  );
};

export default App;
