import logo from "./logo.svg";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";
import React from "react";
import axios from "axios";

function App() {
  const [faves, setFaves] = React.useState([]);
  const [films, setFilms] = React.useState(TMDB.films);
  const [current, setCurrent] = React.useState();
  const filmIndex = 0;

  const handleFaveToggle = (film) => {
    let tempFaves = [...faves];
    if (tempFaves.indexOf(film) >= 0) {
      console.log(`Removing ${film.title} from faves...`);
      tempFaves.splice(tempFaves.indexOf(film), 1);
    } else {
      console.log(`Adding ${film.title} to faves...`);
      tempFaves.push(film);
    }

    setFaves(tempFaves);
  };

  const handleDetailsClick = (film) => {
    console.log("Fetching details for - ", film);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,images&language=en`;

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      setCurrent(response.data)
    })

   // setCurrent(film);
  };

  // const url ="https://process.env[APIKEY]" need to restart whole app

  return (
    <div className="film-library">
      <FilmListing
        films={films}
        faves={faves}
        onFaveToggle={handleFaveToggle}
        onDetailsClick={handleDetailsClick}
      />
      <FilmDetails film={current} />
    </div>
  );
}

export default App;
