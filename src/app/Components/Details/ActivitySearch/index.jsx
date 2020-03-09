import React, { Component} from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class ActivitySearch extends Component {
  state = {
    filter: null
  };

  changeSearchState = criteria => {
    this.props.onChange(criteria);
  };

  setFilter = (event, type) => {
    this.changeSearchState({ filter: type });

    if (type === this.state.filter) {
      this.setState({
        filter: null
      });
    } else {
      this.setState({
        filter: type
      });
    }
    this.toggleFilters();
  };

  handleSearchTermChange = event => {
    const text = event.target.value.toLowerCase();
    this.setState({
      showFilters: false
    });
    this.changeSearchState({ searchTerm: text, filter: null });
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
        this.changeSearchState({ filter: null });
        this.setState({
          filter: null,
          searchTerm: ''
        });
      }
    }
  };

  searchIcon = () => {
    if (this.state.filter) return <FontAwesomeIcon icon={faTimes} fixedWidth />;
    return <FontAwesomeIcon icon={faSearch} fixedWidth />;
  };
  clearFilter = () => {
    this.setState({
      showFilters: true,
      filter: null
    });
  };

  render() {
    const filters = { note: 'Notes', document: 'Documents' };
    return (
      <div className="activity__search">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="govuk-input"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
          onFocus={e => this.setState({ filter: null })}
        />
        <button onClick={this.toggleFilters}>{this.searchIcon()}</button>
        <div hidden={!this.state.filter}>
          <span className="selectedFilter">
            <a href="#/" onClick={this.clearFilter}>All {filters[this.state.filter]}</a>
          </span>
        </div>
        <div hidden={!this.state.showFilters} className="activity__filters">
          {Object.keys(filters).map(type => {
            return (
              <a href="#/" onClick={e => this.setFilter(e, type)}>
                All {filters[type]}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
