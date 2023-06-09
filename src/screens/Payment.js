import {View, Text, ImageBackground, StyleSheet, TouchableOpacity,} from 'react-native'
import React from 'react'

export default function Payment({navigation}) {
    return (
    <ImageBackground
        style={styles.background}
        source={require("../images/PaymentSuccessful.png")}
        >
        <View style={styles.loginButton}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.textButton}>Selesai</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
      width: "70%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 40,
      margin: 20,
      top:"35%",
    },
    textButton: {
      color: '#000000',
      fontWeight: "bold",
    },
})