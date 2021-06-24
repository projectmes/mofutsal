import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState('eye-outline');

  const btnShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setIcon('eye-off-outline');
    } else {
      setIcon('eye-outline');
    }
  };

  const login = () => {
    let data = {
      username: username,
      password: password,
    };
    fetch('http://192.168.43.161:8000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status == 200) {
          navigation.replace('Tab');
          let id_user = res.id_user
          AsyncStorage.setItem('id_user',id_user.toString())
        } else {
          ToastAndroid.show('Login Gagal', ToastAndroid.SHORT);
        }
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#28DF99"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <View style={{height: 250}}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(153, 243, 189,.7)',
            zIndex: 100,
          }}>
          <View style={{padding: 25}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#F6F7D4'}}>
              MoFutsal Login
            </Text>
          </View>
        </View>
        <Image
          source={require('./assets/header.jpg')}
          style={{width: '100%', height: 250, resizeMode: 'cover'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 200,
          zIndex: 200,
          width: '95%',
          backgroundColor: '#fff',
          padding: 15,
          alignSelf: 'center',
          borderRadius: 10,
          elevation: 3,
        }}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.imageLogin}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#28DF99',
            textDecorationLine: 'underline',
          }}>
          LOGIN
        </Text>
        <View
          style={{
            width: '100%',
            position: 'relative',
            padding: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#e0e0e0',
              marginVertical: 7,
              borderRadius: 10,
              padding: 3,
            }}>
            <Icons
              name="person-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={value => setUsername(value)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#e0e0e0',
              marginVertical: 7,
              borderRadius: 10,
              padding: 3,
            }}>
            <Icons
              name="lock-closed-outline"
              size={25}
              color="#e0e0e0"
              style={{marginRight: 5}}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={showPassword}
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '75%', color: '#536162'}}
              onChangeText={value => setPassword(value)}
            />
            <Icons
              name={icon}
              onPress={btnShowPassword}
              size={25}
              color="#e0e0e0"
            />
          </View>
        </View>
        <Text style={{color: '#6E7C7C'}}>
          Tidak Memiliki Akun ?{' '}
          <Text
            style={styles.daftarText}
            onPress={() => navigation.navigate('Daftar')}>
            Daftar
          </Text>
        </Text>
        <TouchableOpacity style={styles.btnLogin} onPress={login}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  imageLogin: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  btnLogin: {
    backgroundColor: '#28DF99',
    padding: 10,
    marginVertical: 15,
    borderRadius: 10,
    width: '50%',
  },
  loginText: {
    color: '#F6F7D4',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  daftarText: {
    textDecorationLine: 'underline',
    color: '#0184ba',
  },
});
