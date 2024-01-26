import React from "react";
import { useState } from "react";

export const NotesCreate = (props) => {
  const { createNote } = props;

  const [text, setText] = useState(null);
  const [category, setCategory] = useState("a");

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
        e.preventDefault();
        createNote(text, category);
      }}
    >
      <label htmlFor="exampleFormControlTextarea1">Write Your Note Below</label>
      <textarea
        className="form-control"
        id="myTextSelect"
        rows="3"
        onChange={onTextChange}
      ></textarea>
      <br />
      <label htmlFor="inputState">Select Your Category</label>
      <select
        id="mySelect"
        className="form-control"
        onChange={onCategoryChange}
        defaultValue="a"
      >
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
