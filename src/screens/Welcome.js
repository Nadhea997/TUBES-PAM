import React, { useEffect, useState } from "react";
import {Text, View, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground,TextInput,} from 'react-native';
import { auth } from "../../Firebase";
import { useNavigation } from "@react-navigation/core";

function Welcome(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleLogIn = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged In with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground
        source={require('../images/sky.jpg')}
        style={{flex:1}}>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            }}>
          <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold',marginTop: 10}}>
           저는 워싱턴 디씨에 살아요!!
          </Text>
          <Text style={{color: '#FFFFFF',marginTop: 5}}>
          WELCOME TO EXO SHOP
          </Text>
          <View style={{flex:1, justifyContent: 'center', alignItems:'center', marginTop: 120,}}>
            <Image
              source={require('../images/exologo.png')}
              style={{width: 250, height:250,}}
            />
          </View>

          <TextInput
            value={email}  onChangeText={text => setEmail(text)}
            style={{
              backgroundColor:'#FFFFFF',
              paddingLeft: 10,
              borderRadius:50,
              elevation: 5,
              marginTop:225,
              }}
            placeholder="Masukkan Email Anda"
          />
          <TextInput
            value={password}  onChangeText={text => setPassword(text)}
            style={{
              backgroundColor:'#FFFFFF',
              paddingLeft: 10,
              borderRadius:50,
              elevation: 5,
              marginTop:10,
              secureTextEntry,
              }}
            placeholder="Masukkan Password Anda"
          />
          <TouchableOpacity   onPress={() => navigation.navigate("Login")}>
            <Text
            style={{
              color: '#000000', 
              fontWeight: 'bold', 
              fontSize:18,
              backgroundColor:'#D3D3D3',
              justifyContent: 'center',
              alignItems:'center', 
              marginTop:10,
              paddingVertical:10,
              borderRadius:6,
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Daftar")}>
            <Text 
               style={{
                color: '#FFFFFF',
                textAlign: 'center',
                marginTop:15,
               marginBottom:15,
              }}>
            Belum punya akun? Sign In
          </Text>
          </TouchableOpacity>
          
        </View>   
      </ImageBackground>
    </View>
  );
};

export default App;