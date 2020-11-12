import React , {useState} from "react";

function Note(props) {


function handleclickDelete(){
  props.deleted(props.id);
}




  return (
    <div className="note">
      
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclickDelete}>DELETE</button>
    </div>
  );
}

export default Note;
