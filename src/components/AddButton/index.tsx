import React from 'react';
import {Container, AddText} from './styles';

interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({onPress}) => (
  <Container>
    <AddText onPress={onPress}>+ Add a Cryptocurrency</AddText>
  </Container>
);

export default AddButton;
