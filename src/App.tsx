import React from 'react';
import MyCryptosScreen from './screens/MyCryptosScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddCryptoScreen} from './screens/AddCryptoScreen';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MyCryptosScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="AddCrypto" component={AddCryptoScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
