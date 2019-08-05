import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { gnomeInformationSelector } from '../../redux/selectors/gnomeList';
import GnomeInformationComponent from '../../components/GnomeInformationComponent';

const ContainerDiv = styled.div``;
class GnomeInformationContainer extends Component {
  componentDidMount() {}

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
          />
        </ContainerDiv>
      );
      return (
        <div>
          <h2>Gnome detail</h2>
          {gnomeInformation}
        </div>
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
