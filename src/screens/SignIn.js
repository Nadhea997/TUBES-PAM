import React from 'react';
import {Text, View, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground,TextInput,} from 'react-native';

function SignIn({navigation}){
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
            value={nama}  onChangeText={text => setNama(text)}
            style={{
              backgroundColor:'#FFFFFF',
              paddingLeft: 10,
              borderRadius:50,
              elevation: 5,
              marginTop:225,
              }}
            placeholder="Masukkan Nama Anda"
        />

        <TextInput
            value={password}  onChangeText={text => setPassword(text)}
            style={{
              backgroundColor:'#FFFFFF',
              paddingLeft: 10,
              borderRadius:50,
              elevation: 5,
              marginTop:225,
              }}
            placeholder="Masukkan Kata Sandi Anda"
        />

        <TextInput
            value={repassword}  onChangeText={text => setRepassword(text)}
            style={{
              backgroundColor:'#FFFFFF',
              paddingLeft: 10,
              borderRadius:50,
              elevation: 5,
              marginTop:225,
              }}
            placeholder="Masukkan Kembali Password Anda"
        />

        <TextInput
            value={country}  onChangeText={text => setCountry(text)}
            style={{
              backgroundColor:'#FFFFFF',
              paddingLeft: 10,
              borderRadius:50,
              elevation: 5,
              marginTop:225,
              }}
            placeholder="Masukkan Asal Negara Anda"
        />

 </ImageBackground>
 </View>
   )
};

export default App;