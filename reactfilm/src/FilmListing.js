import "./App.css";
import FilmRow from "./FilmRow";
import React from 'react';
import FilmListingFilter from "./FilmListingFilter";

function FilmListing(props) {

  const [filter,setFilter] = React.useState("all")

  const allFilms = props.films.map((film, index) => (
    <FilmRow film={film} key={film.id} onFaveToggle={() => props.onFaveToggle(film)} isFave={props.faves.includes(film)} onDetailsClick={() => props.onDetailsClick(film)} />
  ));


  const favesFilms = props.faves.map((film, index) => (
    <FilmRow film={film} key={film.id} onFaveToggle={() => props.onFaveToggle(film)} isFave={props.faves.includes(film)} onDetailsClick={() => props.onDetailsClick(film)} />
  ));

  const handleFilterClick = (filter) => {
    console.log("Setting filter to", filter);
    setFilter(filter);
  };
  return (
      
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <FilmListingFilter allFilms={allFilms} favesFilms={favesFilms} filter={filter} handleFilterClick={handleFilterClick}/>
        {/* <div className="film-list-filters">
          <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
           onClick={() => handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
            onClick={() => handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{props.faves.length}</span>
          </div>
        </div>
        {(filter === 'faves' ? favesFilms : allFilms)} */}
        {/* <div className="film-list">
        <h1 className="section-title">FILMS</h1
        {allFilms}
      </div> */}
      </div>

      

  );
}

export default FilmListing;
