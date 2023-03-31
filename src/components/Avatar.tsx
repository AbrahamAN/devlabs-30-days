import React from 'react';
import styled from 'styled-components/native';

interface AvatarProps {
  uri: string;
  size?: number;
}

interface ContainerProps {
  size?: number;
}

const Container = styled.View<ContainerProps>`
  width: ${({size = 50}) => size}px;
  height: ${({size = 50}) => size}px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image<ContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: ${({size = 50}) => size / 2}px;
`;

const Avatar = ({uri, size = 50}: AvatarProps) => {
  return (
    <Container size={size}>
      <Image size={size} source={{uri}} />
    </Container>
  );
};

export default Avatar;
