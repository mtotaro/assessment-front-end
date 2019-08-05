import React, { Component, Fragment } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { gnomeInformationSelector } from '../../redux/selectors/gnomeList';
import GnomeInformationComponent from '../../components/GnomeInformationComponent';


const ContainerDiv = styled.div`

  background: #B8DD75;
`;


const Header = styled.h2`
 margin-right:100px;
`;

const HeaderDiv = styled.div`
  text-align: center;
  width: 99%;
  border: 2px solid black;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0;
  padding-bottom: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  background: #8EBA00;
  display:flex;
  justify-content:center;

`;

class GnomeInformationContainer extends Component {
  componentDidMount() {}

  handleGoBack = () => {
    this.props.history.push('/');
  };

  render() {
    if (this.props.details) {
      let gnomeInformation = <Redirect to="/" />;
      gnomeInformation = (
        <ContainerDiv>
          <GnomeInformationComponent
            id={this.props.details.id}
            name={this.props.details.name}
            age={this.props.details.age}
            height={this.props.details.height}
            weight={this.props.details.weight}
            thumbnail={this.props.details.thumbnail}
            haircolor={this.props.details.hair_color}
            professions={this.props.details.professions}
            friends={this.props.details.friends}
            goBack={this.handleGoBack}
          />
        </ContainerDiv>
      );
      return (
        <Fragment>
          <HeaderDiv>
            <Header>Gnome Information</Header>

          </HeaderDiv>
          {gnomeInformation}
        </Fragment>
      );
    }
    return <Redirect to="/" />;
  }
}

GnomeInformationContainer.propTypes = {
  details: PropTypes.object,
};

// actions
const mapDispatchtoProps = {};
// selectors
const mapStateToProps = (state, ownProps) => ({
  details: gnomeInformationSelector(state, ownProps.match.params.id),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeInformationContainer);
