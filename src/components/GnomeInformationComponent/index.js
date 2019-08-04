import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;
const Image = styled.img``;
const Paragraph = styled.p``;

const GnomeInformationComponent = ({
  name, age, height, weight, haircolor, thumbnail,
}) => (
  <div>
    <Container />
    <Paragraph>

      Name:
      {name}
    </Paragraph>
    <Paragraph>

      Age:
      {age}
    </Paragraph>
    <Paragraph>

      Height
      {height}
    </Paragraph>
    <Paragraph>

      Weight:
      {weight}
    </Paragraph>
    <Paragraph>

      Hair Color:
      {haircolor}
    </Paragraph>
    <Image alt={name} src={thumbnail} />
  </div>
);

GnomeInformationComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  weight: PropTypes.number,
  haircolor: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default GnomeInformationComponent;
