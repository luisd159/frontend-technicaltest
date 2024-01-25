import { useState } from "react";
import axios from "axios";

const url ="http://localhost:8080/note";

export function useNotes() {
  const [notes, setNotes] = useState(null);
  const [error, setError] = useState(null);
  const [tempNotes, setTempNotes] = useState(null);
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setNotes(response.data);
      setTempNotes(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const createNote = async (txt, ctg) => {
    try {
      await axios.post(url, {
        text: txt,
        category: ctg,
        archived: false,
        date: new Date(),
      });
      toggleCreatingNote();
    } catch (error) {
      setError(error);
    }
  };

  const updateNote = async (props) => {
    try {
      await axios.patch(`${url}/${props.id}`, {
        text: props.text,
        category: props.category,
        archived: props.archived,
        date: new Date(),
      });
    } catch (error) {
      setError(error);
    }
  };

  const removeNote = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      setError(error);
    }
  };

  const toggleEditingNote = () => {
    if (isEditingNote) {
      setIsEditingNote(false);
    } else {
      setIsEditingNote(true);
    }
  };

  const toggleCreatingNote = () => {
    if (isCreatingNote) {
      setIsCreatingNote(false);
    } else {
      setIsCreatingNote(true);
    }
  };

  const activeNote = () => {
    let active = tempNotes.filter((item) => item.archived === false);
    setNotes(active);
  };

  const archivedNotes = () => {
    let active = tempNotes.filter((item) => item.archived === true);
    setNotes(active);
  };

  const categoryNotes = (cat) => {
    let active = tempNotes.filter((item) => item.category === cat);
    setNotes(active);
  };

  const showAllNotes = () => {
    setNotes(tempNotes);
  };

  function formatCategory(value) {
    if (value === "h") {
      return "Happy";
    } else if (value === "a") {
      return "Any";
    } else if (value === "s") {
      return "Sad";
    }
  }

  function formatDate(value) {
    const event = new Date(value);
    return event.toString();
  }

  return {
    data: notes,
    error,
    activeNote,
    archivedNotes,
    showAllNotes,
    formatCategory,
    formatDate,
    fetchData,
    createNote,
    toggleCreatingNote,
    toggleEditingNote,
    isCreatingNote,
    isEditingNote,
    updateNote,
    removeNote,
    categoryNotes
  };
}
