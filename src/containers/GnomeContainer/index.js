import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initGnomes, setGnomes } from '../../redux/actions/gnomes';
import GnomeComponent from '../../components/GnomeComponent';
import { gnomeListSelector } from '../../redux/selectors/gnomeList';
import GnomeSearchContainer from '../GnomeSearchContainer';

const ContainerDiv = styled.div`
  position: relative;
  z-index: 0;
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
`;
const ContainerSearch = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 80px;
  background-color: white;
  box-shadow: 0 0 20px 10px rgba(50, 50, 50, 0.1);
  margin-top: -55px;
`;

class GnomeContainer extends React.Component {
  componentDidMount() {
    this.props.initGnomes();
  }

  render() {
    const { gnomeList } = this.props;
    if (gnomeList != null) {
      return (
        <div>
          <ContainerSearch>
            <GnomeSearchContainer />
          </ContainerSearch>
          <ContainerDiv>
            <GnomeComponent gnomeList={gnomeList} />
          </ContainerDiv>
        </div>
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
