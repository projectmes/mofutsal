import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons1 from 'react-native-vector-icons/MaterialCommunityIcons';

var HEIGHT = Dimensions.get('window').height + 150;

const Daftar = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [icon, setIcon] = useState('eye-outline');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [ktp, setKtp] = useState('');

  const daftar = () => {
    let data = {
      nama: nama,
      alamat: alamat,
      username: username,
      password: password,
      phone: phone,
      ktp: ktp,
    };


    fetch('http://192.168.43.161:8000/user/register', {
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
          ToastAndroid.show(
            'Daftar Berhasil, Silahkan Login',
            ToastAndroid.LONG,
          );
          navigation.replace('Login');
        } else {
          ToastAndroid.show('Daftar Gagal', ToastAndroid.SHORT);
        }
      });
  };

  const btnShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setIcon('eye-off-outline');
    } else {
      setIcon('eye-outline');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
              MoFutsal Daftar
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
          top: 150,
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
          DAFTAR
        </Text>
        <View
          style={{
            width: '100%',
            position: 'relative',
            padding: 15,
          }}>
          <View style={styles.inputContainer}>
            <Icons
              name="person-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="Nama"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setNama(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icons
              name="location-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="Alamat"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setAlamat(value)}
            />
          </View>
          <View style={styles.inputContainer}>
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
              onChangeText={(value) => setUsername(value)}
            />
          </View>
          <View style={styles.inputContainer}>
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
              onChangeText={(value) => setPassword(value)}
            />
            <Icons
              name={icon}
              onPress={btnShowPassword}
              size={25}
              color="#e0e0e0"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icons
              name="ios-call-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="No.Phone"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setPhone(value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icons1
              name="card-account-details-outline"
              size={25}
              style={{marginRight: 5}}
              color="#e0e0e0"
            />
            <TextInput
              placeholder="KTP"
              placeholderTextColor="rgba(0,0,0,.4)"
              style={{width: '100%', color: '#536162'}}
              onChangeText={(value) => setKtp(value)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={daftar}>
          <Text style={styles.loginText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Daftar;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    height: HEIGHT,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginVertical: 7,
    borderRadius: 10,
    padding: 3,
  },
});
