import React, { Component } from 'react';
import Note from '../Note';
import ActivitySearch from '../ActivitySearch';

export default class Activity extends Component {
  state = {
    notes: this.props.notes,
    filter: null,
    showFilters: false
  };

  searchNotes = criteria => {
    if (criteria.filter) {
      this.setState({
        notes: this.props.notes.filter(note => note.type === criteria.filter)
      });
    } else if (criteria.searchTerm) {
      const notes = this.props.notes;

      const foundNotes = notes.filter(item => {
        const byTitle =
          item.title.toLowerCase().search(criteria.searchTerm.toLowerCase()) !==
          -1;
        const byText =
          item.text.toLowerCase().search(criteria.searchTerm.toLowerCase()) !==
          -1;
        return byText || byTitle;
      });

      this.setState({
        notes: foundNotes
      });
    } else {
      this.setState({
        notes: this.props.notes
      });
    }
  };

  render() {
    const notes = this.state.notes;
    return (
      <div className="activity">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h2>Activity</h2>
          </div>

          <div className="govuk-grid-column-one-third">
            <ActivitySearch onChange={this.searchNotes} />
          </div>
        </div>

        {notes.length > 0 ? (
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th className="activity_th">Activity</th>
                <th className="activity_th">System</th>
              </tr>
              {notes.map((note, i) => {
                return <Note key={note.id ? note.id : i} note={note} />;
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
