import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchGnome } from '../../redux/actions/gnomes';
import GnomeSearchComponent from '../../components/GnomeSearchComponent';

class GnomeSearchContainer extends Component {
  handleChange = (e) => {
    const searchInput = e.target.value;
    this.props.searchGnome(searchInput);
  };

  render() {
    return (
      <GnomeSearchComponent type="text" onChange={this.handleChange} placeholder="Search..." />
    );
  }
}

GnomeSearchContainer.propTypes = { searchGnome: PropTypes.func };

// actions
const mapDispatchtoProps = {
  searchGnome,
};
// selectors
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeSearchContainer);
