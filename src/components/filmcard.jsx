import React from "react";

let Filmcard = ({ film }) => {
    
    return (
  <div className="col-md-6" key={"film-card-${film.id}"}>
    <div className="card shadow my-2">
      <div className="card-body">
        <h4 className="card-title">{film.title}</h4>
        <p className="card-subtitle text-muted">
          Original Title: {film.original_title}
        </p>
        <p className="card-subtitle text-muted">
          Original Title Romanised: {film.original_title_romanised}
        </p>
        <img className="card-img" src={film.image} alt="Card image cap"></img>
        <img
          className="card-img"
          src={film.movie_banner}
          alt="Card image cap"
        ></img>
        <p className="card-subtitle">{film.description}</p>
        <p className="card-subtitle text-muted">Director: {film.director}</p>
        <p className="card-subtitle text-muted">Producer: {film.producer}</p>
        <p className="card-subtitle text-muted">
          Release Date: {film.release_date}
        </p>
        <p className="card-subtitle text-muted">
          Running Time: {film.running_time}
        </p>
        <p className="card-subtitle text-muted">
          Rotten Tomatoes: {film.rt_score}
        </p>
        <a href={film.people} className="card-link">
          Cast
        </a>
      </div>
    </div>
  </div>
  )
};

export default Filmcard;
