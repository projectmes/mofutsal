import React, {useEffect} from 'react';
import {View, Image, StyleSheet, StatusBar, Text, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      AsyncStorage.getItem('id_user')
      .then(res => {
        if(res){

          navigation.replace("Tab");
        } else {

          navigation.replace("Login");
        }
      })
     
      },3000)
  },[])
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#28DF99"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <Image source={require('./assets/logo.png')} style={styles.imageSplash} />
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSplash: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
});
