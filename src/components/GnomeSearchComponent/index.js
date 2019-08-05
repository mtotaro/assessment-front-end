import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding: 0 20px;
  font-size: 1.8em;
  color: black;
  font-weight: 300;
  outline: none;
`;

const GnomeInformationComponent = ({ type, onChange, placeholder }) => (
  <Input type={type} onChange={onChange} placeholder={placeholder} />
);

GnomeInformationComponent.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default GnomeInformationComponent;
