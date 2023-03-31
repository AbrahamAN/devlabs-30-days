import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px;
  align-items: center;
`;

interface AddButtonProps {
  onPress: () => void;
}

const AddButton = ({onPress}: AddButtonProps) => {
  return (
    <Container>
      <Text onPress={onPress} style={{color: 'grey', fontSize: 18}}>
        + Add a Cryptocurrency
      </Text>
    </Container>
  );
};

export default AddButton;
