import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ContainerDiv = styled.div``;

class GnomeContainer extends React.Component {
  componentWillMount() {}

  render() {
    return <ContainerDiv>Test </ContainerDiv>;
  }
}

GnomeContainer.propTypes = {};

const mapDispatchtoProps = {};
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeContainer);
