import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  };

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
      <form className="create-note">
        {isExpanded && (
          <input
            value={note.title}
            onChange={updateNote}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          value={note.content}
          onClick={expand}
          onChange={updateNote}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        {isExpanded && (
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
