import React, { Component } from 'react';
import Note from '../Note';

export default class Activity extends Component {
  state = {
    notes: this.props.notes,
    filter: null
  };

  filterNotes = event => {
    const filter = event.target.value;
    if (filter == 'note' || filter == 'document') {
      this.setState({
        filter: event.target.value,
        notes: this.props.notes.filter(note => note.type == event.target.value)
      });
    }
  };

  searchNotes = event => {
    const notes = this.state.filter ? this.state.notes : this.props.notes;

    const foundNotes = notes.filter(item => {
      const byTitle =
        item.title.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1;
      const byText =
        item.text.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      return byText || byTitle;
    });

    this.setState({
      notes: foundNotes
    });
  };

  render() {
    const notes = this.state.notes;

    return (
      <div className="activity">
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={this.searchNotes}
        />

        <input
          type="radio"
          id="note"
          value="note"
          name="filter"
          onClick={this.filterNotes}
          hidden={true}
        />
        <label htmlFor="note">All Notes</label>
        <input
          type="radio"
          value="document"
          id="document"
          name="filter"
          onClick={this.filterNotes}
          hidden={true}
        />
        <label htmlFor="document">All Documents</label>

        <h2>Activity</h2>
        {notes.length > 0 ? (
          <table>
            <tbody>
              {notes.map((note, id) => {
                return <Note key={id} note={note} />;
              })}
            </tbody>
          </table>
        ) : (
          <p>No data</p>
        )}
      </div>
    );
  }
}
