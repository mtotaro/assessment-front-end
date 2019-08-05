import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchGnome, stopSearch } from '../../redux/actions/gnomes';
import GnomeSearchComponent from '../../components/GnomeSearchComponent';

class GnomeSearchContainer extends Component {
  handleChange = (e) => {
    const searchInput = e.target.value;

    if (searchInput.length > 0) {
      this.props.searchGnome(searchInput);
    } else {
      this.props.stopSearch();
    }
  };

  render() {
    return (
      <GnomeSearchComponent type="text" onChange={this.handleChange} placeholder="Search" />
    );
  }
}

GnomeSearchContainer.propTypes = { searchGnome: PropTypes.func, stopSearch: PropTypes.func };

// actions
const mapDispatchtoProps = {
  searchGnome,
  stopSearch,
};
// selectors
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeSearchContainer);
