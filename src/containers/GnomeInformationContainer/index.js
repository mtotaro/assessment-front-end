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
    let gnomeInformation = <Redirect to="/" />;
    gnomeInformation = (
      <div>
        <GnomeInformationComponent
          name={this.props.details.name}
          age={this.props.details.age}
          height={this.props.details.height}
          weight={this.props.details.weight}
          thumbnail={this.props.details.thumbnail}
          haircolor={this.props.details.hair_color}
        />
      </div>
    );
    return (
      <div>
        <h2>Gnome detail</h2>
        {gnomeInformation}
      </div>
    );
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
