import React from 'react';
import {View, Dimensions} from 'react-native';
import Header from '../components/Header/index';
import {CryptoCoinItem} from '../components/CryptoCoinItem/index';
import AddButton from '../components/AddButton/index';
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
      <AddButton onPress={() => navigation.navigate('AddCrypto')} title="+" />
    </View>
  );
};

export default MyCryptosScreen;
