import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Header = styled.h2`
  font-family: 'Srisakdi', cursive;
  font-size: 24px;
  margin-top: 25px;
`;

const Button = styled.button`
  cursor: pointer;
  background-position: center;
  transition: background 0.8s;
  :active {
    background-color: red;
    background-size: 100%;
    transition: background 0s;
  }
  width: 5vm;
  height: 5vm;
  border: 0px;
  box-shadow: none;
  border-radius: 20%;
  outline: none;
  background-color: #93C5B9

`;

const Container = styled.div`
  display: inline-flex;
  padding-top: 5vw;
`;


const Image = styled.img`
  border-radius: 20px;
`;

const Paragraph = styled.p``;

const ContainerDetail = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 25px 65px;
  padding: 30px;
  box-shadow: 0 0 11px 5px rgba(50, 50, 50, 0.2);
  background-color: #3EA98E;

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
  goBack,
}) => (
  <Fragment>
    <Container />
    <Header>
    My Name is:
      {' '}
      {name}
    </Header>
    <ContainerDetail>

      <Image alt={name} src={thumbnail} width="250vw" height="250vw" gravity="faces" />
      <ContainerDetail2>
        <Paragraph>
          I am
          {' '}
          {age}
          {' '}
          years old.
        </Paragraph>
        <Paragraph>
          My Height is
          {' '}
          {height}
        </Paragraph>
        <Paragraph>
          My Weight is
          {' '}
          {weight}
        </Paragraph>
        <Paragraph>
        My Hair Color:
          {' '}
          {haircolor}
        </Paragraph>
        {friends.length === 0 ? (
          <Paragraph>No Friends</Paragraph>
        ) : (
          <div>
            <Paragraph>My Friends are:</Paragraph>
            <ul>
              {friends.map(friend => (
                <li key={id + friend}>{friend}</li>
              ))}
            </ul>
          </div>
        )}
        {professions.length === 0 ? (
          <Paragraph>I dont work</Paragraph>
        ) : (
          <div>
            <Paragraph>I work as:</Paragraph>
            <ul>
              {professions.map(prof => (
                <li key={id + prof}>{prof}</li>
              ))}
            </ul>
          </div>
        )}

        <Button onClick={goBack}>
          <div>


            Go Back
          </div>
        </Button>
      </ContainerDetail2>

    </ContainerDetail>

  </Fragment>
);

GnomeInformationComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  haircolor: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  professions: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default GnomeInformationComponent;
