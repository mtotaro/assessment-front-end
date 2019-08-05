import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.h2``;
const Container = styled.div``;

const Image = styled.img`
  max-width: 50%;
`;

const Paragraph = styled.p``;

const ContainerDetail = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 25px 65px;
  padding: 30px;
  box-shadow: 0 0 11px 5px rgba(50, 50, 50, 0.2);
`;

const ContainerDetail2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const GnomeInformationComponent = ({
  id,
  name,
  age,
  height,
  weight,
  haircolor,
  thumbnail,
  professions,
  friends,
}) => (
  <div>
    <Container />
    <Header>

      Name:
      {name}
    </Header>
    <ContainerDetail>
      <Image alt={name} src={thumbnail} />
      <ContainerDetail2>
        <Paragraph>

          Age:
          {age}
        </Paragraph>
        <Paragraph>

          Height:
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
        {friends.length === 0 ? (
          <Paragraph>No Friends</Paragraph>
        ) : (
          <div>
            <Paragraph>Friends:</Paragraph>
            <ul>
              {friends.map(friend => (
                <li key={id + friend}>{friend}</li>
              ))}
            </ul>
          </div>
        )}
        <Paragraph>My Work Is: </Paragraph>
        <ul>
          {professions.map(prof => (
            <li key={id + prof}>{prof}</li>
          ))}
        </ul>
      </ContainerDetail2>
    </ContainerDetail>
  </div>
);

GnomeInformationComponent.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  weight: PropTypes.number,
  haircolor: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default GnomeInformationComponent;
