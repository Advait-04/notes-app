import React from "react";

export default function Sidebar(props) {
    function subtitle(note, index) {
        const bArray = note.body.split(/\r?\n/);
        var subTitle;
        bArray[0] === "# Type your markdown note's title here" ||
        bArray[0] === ""
            ? (subTitle = `Note ${index + 1}`)
            : (subTitle = bArray[0]);
        return subTitle;
    }

    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{subtitle(note, index)}</h4>
                <button
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3 className="app-name">Notes</h3>
                <button className="new-note" onClick={props.newNote}>
                    +
                </button>
            </div>
            {noteElements}
        </section>
    );
}
