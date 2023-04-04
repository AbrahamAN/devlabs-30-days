import React from 'react';
import {Container, Image} from './styles';

interface AvatarProps {
  uri: string;
  size?: number;
}

const Avatar = ({uri, size = 50}: AvatarProps) => {
  return (
    <Container size={size}>
      <Image size={size} source={{uri}} />
    </Container>
  );
};

export default Avatar;
