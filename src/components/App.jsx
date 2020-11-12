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

function handleDelete(id){
  setNoteCreate (preValues=>{
  return preValues.filter((noteItem, index)=>{ return index !==id;})
});}


  return (
    <div>
      <Header />
      <CreateArea  
        addButton={handleCreate}
      />

     {areaCreateArray.map((noteItem , index) =>{
     return <Note 
      key={index}
      id ={index}
      title={noteItem.title}
      content={noteItem.content}
      deleted ={handleDelete}
        /> 
     })}
      <Footer />
    </div>
  );
}

export default App;
