import React from 'react';
import Avatar from '../Avatar';
import {Container, Title} from './styles';

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
