import styled from 'styled-components/native';


export interface ContainerProps {
  size?: number;
}


export const Container = styled.View<ContainerProps>`
  width: ${({size = 50}) => size}px;
  height: ${({size = 50}) => size}px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image<ContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: ${({size = 50}) => size / 2}px;
  marginRight: 20px;
`;