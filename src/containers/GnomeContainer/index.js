import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initGnomes, setGnomes } from '../../redux/actions/gnomes';
import GnomeComponent from '../../components/GnomeComponent';
import { gnomeListSelector } from '../../redux/selectors/gnomeList';

const ContainerDiv = styled.div``;

class GnomeContainer extends React.Component {
  componentDidMount() {
    this.props.initGnomes();
  }

  render() {
    const { gnomeList } = this.props;
    if (gnomeList != null) {
      return <GnomeComponent gnomeList={gnomeList} />;
    }
    return <div>Loading...</div>;
  }
}

GnomeContainer.propTypes = {
  gnomeList: PropTypes.arrayOf(PropTypes.object),
};

// actions
const mapDispatchtoProps = {
  initGnomes,
  setGnomes,
};
// selectors  // TODO:  hacer un selector de la lista y mapear luego
const mapStateToProps = state => ({
  gnomeList: gnomeListSelector(state),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeContainer);
