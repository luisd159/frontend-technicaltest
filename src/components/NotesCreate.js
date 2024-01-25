import React from "react";
import { useState } from "react";

export const NotesCreate = (props) => {
  const { createNote } = props;

  const [text, setText] = useState(null);
  const [category, setCategory] = useState("a");

  const onCategoryChange = () =>{
    setCategory(document.getElementById("mySelect").value);
  }
  const onTextChange = () =>{
    setText(document.getElementById("myTextSelect").value);
  }

  return (
    <form className="p-3" onSubmit={ () => createNote(text,category)} >
      <label for="exampleFormControlTextarea1">Write Your Note Below</label>
      <textarea
        class="form-control"
        id="myTextSelect"
        rows="3"
        onChange={onTextChange}
      ></textarea>
      <br/>
      <label for="inputState">Select Your Category</label>
      <select id="mySelect" class="form-control" onChange={onCategoryChange}>
        <option selected value={"a"}>Any</option>
        <option value={"h"}>Happy</option>
        <option value={"s"}>Sad</option>
      </select>
      <br/>
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
  );
};
