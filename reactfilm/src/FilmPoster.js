import "./App.css";

function FilmPoster(props) {
  return (
        <img src={`https://image.tmdb.org/t/p/w780${props.poster_path}`} alt="" />

  );
}

export default FilmPoster;
