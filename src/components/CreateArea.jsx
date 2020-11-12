import React , { useState } from "react";



function CreateArea(props) {

  const [valueInput , setcalueInput]=useState({
    title :"",
    content: ""
  });
  
  function handleChange(event){
    const {name , value}= event.target;//destructed object
    

    setcalueInput((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      } 
     
    });

  }
  

  function submitButton(event){

  props.addButton(valueInput);
  event.preventDefault();//this to prevent screen flashing (reloading )
  setcalueInput({title :"",content: ""});
}

  return (
    <div>
      <form>
        <input onChange={handleChange} value={valueInput.title} name="title" placeholder="Title"  />
        <textarea  onChange={handleChange} value={valueInput.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitButton}>Add</button>
       
      </form>
    </div>
  );
}

export default CreateArea;


// ()=> {
//   props.addButton(valueInput);
//   setcalueInput({ title :"", content: ""});
//   }