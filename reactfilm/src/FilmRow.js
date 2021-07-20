import "./App.css";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

function FilmRow(props) {

// const handleDetailsClick = (film) => {
//   console.log("Fetching details for - ",film)
// }
// const [isFave,setIsFave]  = React.useState(false);

  return (
      <div className="film-row" onClick={props.onDetailsClick}>

        <FilmPoster {...props.film}/>
        
        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <p>{(new Date(props.film.release_date)).getFullYear()}</p>
        </div>

        <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle}/>
      </div>
  );
}
export default FilmRow;
