import React from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';

const B = styled.Button`
  position: absolute;
  bottom: 0;
  right: 20px;
`;

export const AddCryptoScreen = () => {
  return (
    <View style={{position: 'relative'}}>
      <Header />
      <B title="Add Crypto" />
    </View>
  );
};
