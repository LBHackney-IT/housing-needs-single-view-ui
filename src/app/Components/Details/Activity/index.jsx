import React, { Component } from 'react';
import Note from '../Note';

export default class Activity extends Component {
  state = {
    notes: this.props.notes
  };

  searchNotes = event => {
    this.setState({
      notes: this.props.notes.filter(item => {
        const byTitle =
          item.title.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1;
        const byText =
          item.text.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1;
        return byText || byTitle;
      })
    });
  };

  render() {
    const notes = this.state.notes;

    return (
      <div className="activity">
        <input type="text" id="search" placeholder="Search" onChange={this.searchNotes} />

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
