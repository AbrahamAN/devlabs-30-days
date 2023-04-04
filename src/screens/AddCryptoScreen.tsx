import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';

const AddButton = styled.Button`
  position: absolute;
  bottom: 0;
  right: 20px;
`;

export const AddCryptoScreen = () => {
  return (
    <View style={{position: 'relative'}}>
      <Header />
      <AddButton title="Add Crypto" />
    </View>
  );
};
