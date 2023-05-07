import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground,TextInput,} from 'react-native';
///import Icon from 'react-native-vector-icons/Ionicons';
const App = () => {

  const [email, setEmail] = useState('')
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground
        source={require('./src/images/sky.jpg')}
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
              source={require('./src/images/exologo.png')}
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
            value={email}  onChangeText={text => setEmail(text)}
            style={{
              backgroundColor:'#FFFFFF',
              paddingLeft: 10,
              borderRadius:50,
              elevation: 5,
              marginTop:10,
              }}
            placeholder="Masukkan Password Anda"
          />
          <TouchableOpacity
          style={{
            backgroundColor:'#D3D3D3',
            justifyContent: 'center',
            alignItems:'center', 
            marginTop:10,
            paddingVertical:10,
            borderRadius:6,

            }}>
            <Text
            style={{
              color: '#000000', 
              fontWeight: 'bold', 
              fontSize:18
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
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