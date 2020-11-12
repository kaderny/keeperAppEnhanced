import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


const [areaCreateArray, setNoteCreate]=useState([]);

function handleCreate(newNote){  
  setNoteCreate((preValue)=>{
    return  [...preValue ,newNote];
  });
  
}


  return (
    <div>
      <Header />
      <CreateArea  
        addButton={handleCreate}
      />

     {areaCreateArray.map((noteItem) =>{
     return <Note 
      // key={valueInput.index}
       title={noteItem.title}
       content={noteItem.content}
        /> 
     })}
     

   
      


   
      <Footer />
    </div>
  );
}

export default App;
