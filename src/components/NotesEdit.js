import React from "react";
import { useState } from "react";

export const NotesEdit = (props) => {
  const { updateNote, Note, formatCategory, toggleEditingNote, fetchData } =
    props;

  const [text, setText] = useState(Note.text);
  const [category, setCategory] = useState(Note.category);

  const note = {
    id: Note.id,
    text: text,
    category: category,
    archived: Note.archived,
    date: new Date(),
  };

  const patchData = () => {
    toggleEditingNote();
  };

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form
      className="p-3"
      onSubmit={(e) => {
        updateNote(note);
        e.preventDefault();
        patchData();
      }}
    >
      <label htmlFor="exampleFormControlTextarea1">Edit Your Note Below</label>
      <textarea
        className="form-control"
        id="myTextSelect"
        rows="3"
        onChange={onTextChange}
        defaultValue={Note.text}
      >
        {}
      </textarea>
      <br />
      <label htmlFor="inputState">Edit Your Category</label>
      <select
        id="myOptionSelect"
        className="form-control"
        onChange={onCategoryChange}
      >
        <option selected>{formatCategory(Note.category)}</option>
        <option value={"a"}>Any</option>
        <option value={"h"}>Happy</option>
        <option value={"s"}>Sad</option>
      </select>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
