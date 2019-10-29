import React, { Component } from 'react';
import Note from '../Note';

export default class Activity extends Component {
  render() {
    return (
      <div className="activity">
        <h2>Activity</h2>
        {this.props.notes.length > 0 ? (
          <table>
            <tbody>
              {this.props.notes.map((note, id) => {
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
