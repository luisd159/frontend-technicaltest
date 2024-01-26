import { useEffect, useState } from "react";
import { NotesEdit } from "./NotesEdit";

export const NotesList = (props) => {
  const {
    data,
    error,
    formatCategory,
    formatDate,
    fetchData,
    updateNote,
    removeNote,
    isEditingNote,
    toggleEditingNote,
  } = props;

  const [note, setNote] = useState(null);

  const edit = (note) => {
    toggleEditingNote();
    setNote(note);
  };

  const delNote = async (note) => {
    await removeNote(note);
    await fetchData();
  };

  const archive = async (note) => {
    await updateNote({ ...note, archived: !note.archived });
    await fetchData();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="data">
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Category</th>
            <th>Archive</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        {error && <li>Error: {error}</li>}
        <tbody>
          {data
            ?.sort((a, b) => a.id - b.id)
            .map((note) => (
              <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.text}</td>
                <td>{formatCategory(note.category)}</td>
                <td>{note.archived ? "Yes" : "No"}</td>
                <td>{formatDate(note.date)}</td>
                <td>
                  <div className="d-flex justify-content-between gap-3 px-3"></div>
                  <button
                    className="btn btn-success"
                    onClick={() => edit(note)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => archive(note)}
                  >
                    {note.archived ? "Unarchive" : "Archive"}
                  </button>
                  <button
                    onClick={() => delNote(note.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <div />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        {isEditingNote ? (
          <NotesEdit
            formatCategory={formatCategory}
            updateNote={updateNote}
            Note={note}
            toggleEditingNote= {toggleEditingNote}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
