import { useNotes } from "./hooks/useNotes";
import "./App.css";
import { NotesList } from "./components/NotesList";
import { NotesCreate } from "./components/NotesCreate";

function App() {
  const {
    data,
    error,
    activeNote,
    archivedNotes,
    showAllNotes,
    formatCategory,
    formatDate,
    fetchData,
    isCreatingNote,
    toggleCreatingNote,
    createNote,
    updateNote,
    categoryNotes,
    removeNote,
    isEditingNote,
    toggleEditingNote
  } = useNotes();

  const notesListProps = {
    data,
    error,
    formatCategory,
    formatDate,
    fetchData,
    updateNote,
    removeNote,
    toggleCreatingNote,
    isEditingNote,
    toggleEditingNote
  };
  const onCategoryChange = () => {
    categoryNotes(document.getElementById("mySelect").value);
  };

  return (
    <div className="App">
      <h1>YOUR NOTES</h1>
      <div className="d-flex gap-3 px-3">
        {isCreatingNote ? (
          <button onClick={toggleCreatingNote} className="btn btn-secondary">
            Back To Notes
          </button>
        ) : (
          <>
            <button onClick={toggleCreatingNote} className="btn btn-primary">
              Create New Note
            </button>
            <button onClick={showAllNotes} className="btn btn-secondary">
              Show All Notes
            </button>
            <button onClick={activeNote} className="btn btn-secondary">
              Show Active Notes
            </button>
            <button onClick={archivedNotes} className="btn btn-secondary">
              Show Archived Notes
            </button>
            <div>
              <label for="inputState"> Filter By Category </label>
              <select
                id="mySelect"
                class="form-control"
                onChange={onCategoryChange}
              >
                <option selected value={"a"}>
                  Any
                </option>
                <option value={"h"}>Happy</option>
                <option value={"s"}>Sad</option>
              </select>
            </div>
          </>
        )}
      </div>
      {!isCreatingNote ? (
        <NotesList {...notesListProps} />
      ) : (
        <NotesCreate createNote={createNote} />
      )}
    </div>
  );
}

export default App;
