
import React from 'react';

function FilmListingFilter(props) {

  return (
      
<>
        <div className="film-list-filters">
          <div className={`film-list-filter ${props.filter === 'all' ? 'is-active' : ''}`}
           onClick={() => props.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{props.allFilms.length}</span>
          </div>
          <div
            className={`film-list-filter ${props.filter === 'faves' ? 'is-active' : ''}`}
            onClick={() => props.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{props.favesFilms.length}</span>
          </div>
        </div>
        {(props.filter === 'faves' ? props.favesFilms : props.allFilms)}
   </>   
    

      

  );
}

export default FilmListingFilter;
