import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground,TextInput,} from 'react-native';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';
import payment from './src/screens/Payment';
import profile from './src/screens/Profile';
import cart from './src/screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" src={Welcome} />
        <Stack.Screen name="SignIn" src={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;