import React, { Component, useState, useEffect } from 'react';
import Note from '../Note';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class ActivitySearch extends Component {
  state = {
    notes: this.props.notes,
    filter: null,
    showFilters: false
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
    this.toggleFilters();
  };

  filteredNotesByType = type => {
    return this.props.notes.filter(note => note.type == type);
  };

  searchNotes = event => {
    // const notes = this.state.filter
    //   ? this.filteredNotesByType(this.state.filter)
    //   : this.props.notes;
    const notes = this.props.notes;
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

  toggleFilters = () => {
    if (this.state.showFilters) {
      this.setState({
        showFilters: false
      });
    } else {
      this.setState({
        showFilters: true
      });
      if (this.state.filter) {
        this.setState({
          filter: null,
          notes: this.props.notes
        });
      }
    }
  };

  render() {
    // const notes = this.state.notes;

    return (
      <div className="activity__search">
        <input
          type="text"
          placeholder="Search"
          className="govuk-input"
          onChange={this.searchNotes}
        />
        <button onClick={this.toggleFilters}>
          {this.state.filter ? (
            <FontAwesomeIcon icon={faTimes} fixedWidth />
          ) : (
            <FontAwesomeIcon icon={faSearch} fixedWidth />
          )}
        </button>

        <div
          className={
            this.state.showFilters
              ? 'activity__filters'
              : 'govuk-visually-hidden'
          }
        >
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
    );
  }
}
