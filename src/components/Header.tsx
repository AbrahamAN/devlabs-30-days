import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  background-color: #05356bd6;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <Title>CryptoTracker Pro</Title>
      <Avatar
        size={50}
        uri={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80`}
      />
    </Container>
  );
};

export default Header;
