import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListBooking = () => {
  const [list,setList] = useState([])
 
  const loadBooking = () => {
    AsyncStorage.getItem('id_user').then(res => {
      fetch('http://192.168.43.161:8000/booking/list/' + res)
        .then(res => res.json())
        .then(res => {
          setList(res);
        });
    });
  }

  useEffect(()=>{
    loadBooking()
  },[])

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 14,
          width: '100%',
          elevation: 5,
          backgroundColor: '#fff',
          padding: 15,
        }}>
        <View
          style={{
            width: '34%',
            borderLeftColor: '#28DF99',
            borderLeftWidth: 3,
            paddingLeft: 15,
          }}>
          <Text>Tanggal</Text>
          <Text>Jam Mulai</Text>
          <Text>Jam Selesai</Text>
          <Text>Harga</Text>
        </View>
        <View>
          <Text style={{color: '#536162'}}>{item.tanggal}</Text>
          <Text style={{color: '#536162'}}>{item.jam_mulai}</Text>
          <Text style={{color: '#536162'}}>{item.jam_selesai}</Text>
          <Text style={{color: '#536162'}}>Rp {item.harga}</Text>
        </View>
        <View
          style={{
            backgroundColor:
              item.status == 'Sudah Bayar'
                ? '#28DF99'
                : item.status == 'Proses'
                ? '#FFC107'
                : '#DA0037',
            paddingVertical: 5,
            borderRadius: 20,
            position: 'absolute',
            right: 8,
            top: '30%',
            width: '38%',
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>
            {item.status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#28DF99"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      {list.length == 0 ? (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image
            source={require('./assets/logo.png')}
            style={{width: '100%', height: 160, resizeMode: 'contain'}}
          />
          <Text style={{color:'#28DF99'}}>Ayo Futsal</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id_booking}
        />
      )}
    </View>
  );
};
export default ListBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
