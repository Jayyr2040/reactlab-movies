import "./App.css";
import { AddToQueue, PinDropSharp, RemoveFromQueue } from "@material-ui/icons";
import React from 'react'

function Fave(props) {

   const handleClick = (e) => {
        e.stopPropagation();
     //  console.log("handling Fave click!");
    //   setIsFave(!isFave);
    props.onFaveToggle();
      } 

   // const [isFave,setIsFave]  = React.useState(false);

  return (
    <>
      <div className={`film-row-fave ${(props.isFave) ? 'remove_from_queue' : 'add_to_queue'}`} onClick={handleClick}>
        <p className="material-icons">
        {(props.isFave) ? <RemoveFromQueue /> : <AddToQueue />}
        </p>
      </div>
    </>
  );
}

export default Fave;
