import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initGnomes, setGnomes } from '../../redux/actions/gnomes';
import GnomeComponent from '../../components/GnomeComponent';
import { gnomeListSelector } from '../../redux/selectors/gnomeList';

const ContainerDiv = styled.div`
  position: relative;
  z-index: 0;
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
`;

class GnomeContainer extends React.Component {
  componentDidMount() {
    this.props.initGnomes();
  }

  render() {
    const { gnomeList } = this.props;
    if (gnomeList != null) {
      return (
        <ContainerDiv>
          <GnomeComponent gnomeList={gnomeList} />
        </ContainerDiv>
      );
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
// selectors
const mapStateToProps = state => ({
  gnomeList: gnomeListSelector(state),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeContainer);
