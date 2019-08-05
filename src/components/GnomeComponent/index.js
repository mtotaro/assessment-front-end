import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 10px 9px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 11px 5px rgba(50, 50, 50, 0.2);
  background-color: white;
  backface-visibility: hidden;
`;

const Container2 = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
`;

const Paragraph = styled.p``;

const Image = styled.img`
  width: 200px;
  height: 200px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const GnomeComponent = ({ gnomeList }) => (
  <Container2>
    {gnomeList.map(gnome => (
      <Container key={gnome.id}>
        <Link to={`/gnome/${gnome.id}`}>
          <Paragraph>{gnome.name}</Paragraph>
          <Image alt={gnome.name} src={gnome.thumbnail} />
        </Link>
      </Container>
    ))}
  </Container2>
);

GnomeComponent.propTypes = {
  pagesShown: PropTypes.number,
  perPage: PropTypes.number,
  gnomeList: PropTypes.arrayOf(PropTypes.object),
};

export default GnomeComponent;
