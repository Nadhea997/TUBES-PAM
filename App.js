import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground,TextInput,} from 'react-native';
import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
//import Login from "./src/screens/Login";
import {createStackNavigator} from '@react-navigation/stack';
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