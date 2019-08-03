import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span``;

const Image = styled.img``;

const GnomeComponent = ({ gnomeList }) => (
  <div>
    {gnomeList.map(gnome => (
      <div key={gnome.id}>
        <Span>{gnome.name}</Span>
        <Span>{gnome.weight}</Span>
        <Span>{gnome.height}</Span>
        <Span>{gnome.hair_color}</Span>

        <Image alt={gnome.name} src={gnome.thumbnail} />
      </div>
    ))}
  </div>
);

GnomeComponent.propTypes = {
  gnomeList: PropTypes.arrayOf(PropTypes.object),
};

export default GnomeComponent;
