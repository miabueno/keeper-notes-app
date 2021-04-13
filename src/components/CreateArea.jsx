import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const updateNote = (event) => {
    const { name, value } = event.target;
    setNote((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={updateNote}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={updateNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
