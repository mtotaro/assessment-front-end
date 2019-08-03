import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initGnomes, setGnomes } from '../../redux/actions/gnomes';

const ContainerDiv = styled.div``;

class GnomeContainer extends React.Component {
  componentDidMount() {
    this.props.initGnomes();
  }

  render() {
    return <ContainerDiv>Test </ContainerDiv>;
  }
}

GnomeContainer.propTypes = {};

// actions
const mapDispatchtoProps = {
  initGnomes,
  setGnomes,
};
// selectors
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeContainer);
