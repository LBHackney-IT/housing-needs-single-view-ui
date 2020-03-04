import React, { Component } from 'react';
import Note from '../Note';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Activity extends Component {
  state = {
    notes: this.props.notes,
    filter: null
  };

  setFilter = event => {
    const type = event.target.value;
    if (type === 'note' || type === 'document') {
      if (type === this.state.filter) {
        event.target.checked = false;
        this.setState({
          filter: null,
          notes: this.props.notes
        });
      } else {
        this.setState({
          filter: type,
          notes: this.filteredNotesByType(type)
        });
      }
    }
  };

  filteredNotesByType = type => {
    return this.props.notes.filter(note => note.type == type);
  };

  searchNotes = event => {
    const notes = this.state.filter
      ? this.filteredNotesByType(this.state.filter)
      : this.props.notes;

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
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h2>Activity</h2>
          </div>

          <div className="govuk-grid-column-one-third">
            <div className="activity__search">
              <input
                type="text"
                placeholder="Search"
                className="govuk-input"
                onChange={this.searchNotes}
              />
              <button onClick={this.showFilters}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
              {/*<button className="govuk-button lbh-button">x</button>*/}
              <div className="govuk-visually-hidden">
                <input
                  type="radio"
                  id="note"
                  value="note"
                  name="filter"
                  onClick={this.setFilter}
                />
                <label htmlFor="note">All Notes</label>
                <br />
                <input
                  type="radio"
                  value="document"
                  id="document"
                  name="filter"
                  onClick={this.setFilter}
                />
                <label htmlFor="document">All Documents</label>
              </div>
            </div>
          </div>
        </div>

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
