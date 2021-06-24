import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = ({navigation}) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showCara, setShowCara] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  const logout = () => {
    AsyncStorage.clear()
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#28DF99"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}
          style={{width: '100%', height: 200, resizeMode: 'contain'}}
        />
        <Text style={styles.headerTitle}>MoFutsal</Text>
        <Text style={styles.textVersion}>V1.0.0</Text>
      </View>

      <Modal
        style={{flex: 1}}
        visible={showAbout}
        animationType="fade"
        transparent>
        <View
          onTouchEnd={() => setShowAbout(!showAbout)}
          style={{
            backgroundColor: 'rgba(0,0,0,.5)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -100,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              width: '90%',
              borderRadius: 10,
            }}>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 24, color: '#28DF99'}}>
                About MoFutsal
              </Text>
            </View>
            <View style={{padding: 10}}>
              <Text style={{color: '#536162'}}>
                Aplikasi MoFutsal merupakan aplikasi sewa lapangan futsal.
                Aplikasi ini dapat melakukan penyewaan futsal tanpa harus datang
                ke tempat penyewaan lapangan futsal.
              </Text>
            </View>
            <Text style={{textAlign: 'center', color: '#28DF99'}}>
              &copy; 2021 <Text style={{color: '#536162'}}> MoFutsal</Text>
            </Text>
          </View>
        </View>
      </Modal>

      <Modal
        style={{flex: 1}}
        visible={showCara}
        animationType="fade"
        transparent>
        <View
        onTouchEnd={() => setShowCara(!showCara)}
          style={{
            backgroundColor: 'rgba(0,0,0,.5)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -100,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              width: '90%',
              borderRadius: 10,
            }}>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 24, color: '#28DF99'}}>
                Cara Pakai MoFutsal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>1.</Text>
              </View>
              <View>
                <Text>Untuk Booking, Tekan Menu Booking di halaman home</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>2.</Text>
              </View>
              <View>
                <Text>Tekan icon ( + ) untuk menambah booking</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>3.</Text>
              </View>
              <View>
                <Text>Masukkan data booking</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>4.</Text>
              </View>
              <View>
                <Text>Setelah itu pilih lapangan yang tersedia</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>5.</Text>
              </View>
              <View>
                <Text>Kemudian Pilih Metode Pembayaran</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>6.</Text>
              </View>
              <View>
                <Text>
                  Ketika Pembayaran Selesai, maka status booking menjadi Proses
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>7.</Text>
              </View>
              <View>
                <Text>
                  Setelah Selesai penyewaan lapangan, maka status booking
                  menjadi Selesai
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 18}}>
                <Text>8.</Text>
              </View>
              <View>
                <Text>
                  Jika Tidak Melakukan pembayaran dalam waktu tertentu, maka
                  otomatis akan dibatalkan.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        style={{flex: 1}}
        visible={showTeam}
        animationType="fade"
        transparent>
        <View
        onTouchEnd={() => setShowTeam(!showTeam)}
          style={{
            backgroundColor: 'rgba(0,0,0,.5)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -100,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              width: '90%',
              borderRadius: 10,
            }}>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 24, color: '#28DF99'}}>
                Team Pembuatan MoFutsal
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>182112634 </Text>
              </View>
              <View>
                <Text>- Muhammad Rafi </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>182111701 </Text>
              </View>
              <View>
                <Text>- Meutia Fanny </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>182112375 </Text>
              </View>
              <View>
                <Text>- Ahmad Ihza Auliya </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>182112294 </Text>
              </View>
              <View>
                <Text>- Puji Iskandar </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>182113281 </Text>
              </View>
              <View>
                <Text>- Wanda Wahyu Putra </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.btnItem}
          onPress={() => setShowAbout(!showAbout)}>
          <Icons
            name="information-circle-outline"
            size={35}
            style={{paddingRight: 12}}
            color="#28DF99"
          />
          <Text style={styles.itemText}>About MoFutsal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnItem}
          onPress={() => setShowTeam(!showTeam)}>
          <Icons
            name="people-outline"
            size={35}
            style={{paddingRight: 12}}
            color="#28DF99"
          />
          <Text style={styles.itemText}>Team MoFutsal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnItem}
          onPress={() => setShowCara(!showCara)}>
          <Icons
            name="help-circle-outline"
            size={35}
            style={{paddingRight: 12}}
            color="#28DF99"
          />
          <Text style={styles.itemText}>Cara Pakai MoFutsal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnItem} onPress={logout}>
          <Icons
            name="exit-outline"
            size={35}
            style={{paddingRight: 12}}
            color="#28DF99"
          />
          <Text style={styles.itemText}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 10,
    // backgroundColor: '#99F3BD',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#28DF99',
  },
  textVersion: {
    color: '#99F3BD',
    textAlign: 'center',
  },
  content: {
    borderColor: '#eee',
    borderTopWidth: 1,
  },
  btnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    //   borderColor:'#D2F6C5',
    //   borderTopWidth:1,
    //   borderBottomWidth:1,
    padding: 8,
  },
  itemText: {
    color: '#536162',
  },
});
