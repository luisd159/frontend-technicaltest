import React from "react";
import { useState } from "react";

export const NotesEdit = (props) => {
  const { updateNote, Note, formatCategory } = props;

  const [text, setText] = useState(Note.text);
  const [category, setCategory] = useState(Note.category);

  const note = {
    id: Note.id,
    text: text,
    category: category,
    archived: Note.archived,
    date: new Date()
  }

  const onCategoryChange = () => {
    setCategory(document.getElementById("myOptionSelect").value);
  };
  const onTextChange = () => {
    setText(document.getElementById("myTextSelect").value);
  };

  console.log(note)

  return (
    <form className="p-3" onSubmit={()=> updateNote(note)}>
      <label for="exampleFormControlTextarea1">Edit Your Note Below</label>
      <textarea
        class="form-control"
        id="myTextSelect"
        rows="3"
        onChange={onTextChange}
      >{Note.text}</textarea>
      <br />
      <label for="inputState">Edit Your Category</label>
      <select id="myOptionSelect" class="form-control" onChange={onCategoryChange}>
        <option selected >{formatCategory(Note.category)}</option>
        <option value={"a"}>Any</option>
        <option value={"h"}>Happy</option>
        <option value={"s"}>Sad</option>
      </select>
      <br />
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
