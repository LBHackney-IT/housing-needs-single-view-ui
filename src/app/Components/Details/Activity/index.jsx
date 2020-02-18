import React, { Component } from 'react';
import Note from '../Note';

export default class Activity extends Component {
  render() {
    const { notes } = this.props;

    return (
      <div className="activity">
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
