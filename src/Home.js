import React ,{useState,useEffect} from 'react';
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
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [profile,setProfile] = useState({})
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

  const loadUser = () => {
    AsyncStorage.getItem('id_user').then(res => {
      fetch('http://192.168.43.161:8000/user/detail/' + res)
        .then(res => res.json())
        .then(res => {
          setProfile(res);
          console.log(res)
        });
    });
  };

  useEffect(() => {
    loadNotif();
    loadUser();
  }, []);



  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#28DF99"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('./assets/user-male.png')} />
        <Text style={{fontWeight:'bold',marginVertical:5,color:'#536162'}}>{profile.nama}</Text>
        <Text style={{color:'#536162'}}>Member/Penyewa</Text>
        <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:5,backgroundColor: 'rgba(255,255,255,.4)',borderTopLeftRadius:60,borderBottomLeftRadius:60 ,borderTopRightRadius:40,borderBottomRightRadius:10}}>
          <Icons
            name="location-outline"
            size={25}
            color="#28DF99"
            style={{backgroundColor: '#fff', padding: 10, borderRadius: 60}}
          />
          <View style={{padding: 7,maxWidth:300,marginVertical:5}}>
            <Text style={{color:'#536162'}}>{profile.alamat}</Text>
          </View>
        </View>
      </View>
      <View style={{backgroundColor:'#fff',flex:1,borderTopLeftRadius:40,borderTopRightRadius:40,padding:15,marginTop:18}}>
          <Text style={{fontWeight:'bold',color:'#28DF99',textDecorationLine:'underline',fontSize:18,textAlign:'center'}}>Dashboard</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:14}}>
              <TouchableOpacity activeOpacity={0.7} style={{padding:15,backgroundColor:'#24acb5',borderRadius:10,elevation:5,alignItems:'center'}} onPress={()=>navigation.navigate("ListBooking")}>
                  <Icons name='calendar-outline' color='#fff' size={60}/>
                  <Text style={{color:'#fff',textAlign:'center'}}>Booking</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={{padding:15,backgroundColor:'#f7f8fa',borderRadius:10,elevation:5,alignItems:'center',borderWidth:1,borderColor:'#eee'}} onPress={()=>navigation.navigate("HistoryBooking")}>
                  <Icons1 name='calendar-clock' color='#28DF99' size={60}/>
                  <Text style={{color:'#28DF99',textAlign:'center'}}>History Booking</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={{padding:15,backgroundColor:'#28DF99',borderRadius:10,elevation:5,alignItems:'center'}} onPress={()=>navigation.navigate("Notifikasi")}>
                  <Icons name='notifications-outline' color='#fff' size={60}/>
                  <Text style={{color:'#fff',textAlign:'center'}}>Notifikasi ({list.length})</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99F3BD',
  },
});
