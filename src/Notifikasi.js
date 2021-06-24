import React, {useState, useEffect} from 'react';
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
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notifikasi = () => {
  const [list, setList] = useState([]);

  const loadNotif = () => {
    AsyncStorage.getItem('id_user').then(res => {
      fetch('http://192.168.43.161:8000/notifikasi/list/' + res)
        .then(res => res.json())
        .then(res => {
          setList(res);
        });
    });
  };

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
            width: '100%',
            borderLeftColor: '#28DF99',
            borderLeftWidth: 3,
            paddingLeft: 15,
          }}>
          <Text style={{fontWeight:'bold',color:'#28DF99',fontSize:20}}>{item.title}</Text>
          <Text style={{color:'#536162'}}>{item.message}</Text>
          <View style={{borderWidth:1,borderColor:'#F6F7D4'}}/>
          <Text style={{color:'#99F3BD'}}>{item.date}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    loadNotif();
  }, []);

  return (
    <View style={styles.container}>
      {list.length == 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./assets/logo.png')}
            style={{width: '100%', height: 160, resizeMode: 'contain'}}
          />
          <Text style={{color: '#28DF99'}}>Tidak Ada Notifikasi</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id_notifikasi}
        />
      )}
    </View>
  );
};

export default Notifikasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
