import React from 'react';
import {View, Dimensions} from 'react-native';
import Header from '../components/Header';
import {CryptoCoinItem} from '../components/CryptoCoinItem';
import FloatingButton from '../components/AddButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation';

type MyCryptosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MyCryptos'
>;

interface MyCryptosScreenProps {
  navigation: MyCryptosScreenNavigationProp;
}

const MyCryptosScreen = ({navigation}: MyCryptosScreenProps) => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height - 22,
      }}>
      <Header />
      <CryptoCoinItem />
      <FloatingButton
        onPress={() => navigation.navigate('AddCrypto')}
        title="+"
      />
    </View>
  );
};

export default MyCryptosScreen;
