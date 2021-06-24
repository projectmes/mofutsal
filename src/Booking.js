import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Modal,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const Booking = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  const [timeStart, setTimeStart] = useState('');
  const [timeStartRaw, setTimeStartRaw] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState('');
  const [lama, setLama] = useState('1');
  const [lamaMdl, setLamaMdl] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const onChangeTime = (event, selectedDate) => {
    setShowTime(false);
    const currentDate = selectedDate || date;
    let hours = new Date(currentDate).getHours();
    let min = new Date(currentDate).getMinutes();

    hours < 10 ? (hours = `0${hours}`) : (hours = hours);
    min < 10 ? (min = `0${min}`) : (min = min);
    var formatted = `${hours}:${min}`;

    const timeSplit = formatted.split(':');
    let addTime = parseInt(timeSplit[0]) + parseInt(lama);
    addTime > 23 ? (addTime = '00') : (addTime = addTime);
    addTime = parseInt(addTime) + parseInt(lama - 1);

    addTime < 10 ? (addTime = `0${addTime}`) : (addTime = addTime);
    let formatted1 = `${addTime}:${timeSplit[1]}`;
    setTimeStart(formatted);
    setTimeStartRaw(currentDate);
    setTimeEnd(formatted1);
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDate(false);
    const currentDate = selectedDate || date;
    var tanggal = new Date(currentDate).getDate();
    var bulan = new Date(currentDate).getMonth() + 1;
    var tahun = new Date(currentDate).getFullYear();

    bulan < 10 ? (bulan = `0${bulan}`) : (bulan = bulan);
    tanggal < 10 ? (tanggal = `0${tanggal}`) : (tanggal = tanggal);

    var formatted = `${tanggal}-${bulan}-${tahun}`;

    setDate1(formatted);
    setDate(currentDate);
  };

  const setLamaWaktu = item => {
    const timeSplit = timeStart.split(':');
    let addTime = parseInt(timeSplit[0]) + parseInt(item);
    addTime > 23 ? (addTime = '00') : (addTime = addTime);
    addTime = parseInt(addTime) + parseInt(item - 1);

    addTime < 10 ? (addTime = `0${addTime}`) : (addTime = addTime);
    let formatted = `${addTime}:${timeSplit[1]}`;
    setTimeEnd(formatted);
    setLama(item);
  };

  const time = () => {
    setShowTime(true);
  };
  const datePicker = () => {
    setShowDate(true);
  };


  const booking = () => {
      navigation.navigate('Pembayaran',{tanggal:date1,waktu_mulai:timeStart,waktu_selesai:timeEnd,lama:lama})
  }

  let listTime = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#28DF99"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <Modal
        style={{flex: 1}}
        visible={lamaMdl}
        animationType="fade"
        transparent>
        <View
          onTouchEnd={() => setLamaMdl(!lamaMdl)}
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
              {listTime.map(item => (
                <TouchableOpacity
                  onPress={() => setLamaWaktu(item)}
                  style={{
                    borderColor: '#e0e0e0',
                    borderBottomWidth: 1,
                    marginBottom: 6,
                    padding: 10,
                  }}>
                  <Text style={{textAlign: 'center'}}>{item} Jam</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
      <View style={{height: 250}}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(153, 243, 189,.7)',
            zIndex: 100,
          }}></View>
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
          top: 100,
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
          Booking Futsal
        </Text>

        {showTime && (
          <DateTimePicker
            testID="dateTimePicker"
            value={timeStartRaw}
            mode="time"
            is24Hour={true}
            display="default"
            locale={'ID-id'}
            onChange={onChangeTime}
          />
        )}
        {showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            minimumDate={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            locale={'ID-id'}
            onChange={onChangeDate}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={time}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e0e0e0',
            marginVertical: 7,
            borderRadius: 10,
            paddingLeft: 5,
          }}>
          <Icons
            name="calendar-outline"
            size={25}
            style={{marginRight: 5}}
            color="#e0e0e0"
          />
          <TextInput
            placeholder="Waktu Mulai"
            placeholderTextColor="rgba(0,0,0,.4)"
            style={{width: '80%', color: '#536162'}}
            editable={false}
            value={timeStart}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e0e0e0',
            marginVertical: 7,
            borderRadius: 10,
            paddingLeft: 5,
          }}>
          <Icons
            name="calendar-outline"
            size={25}
            style={{marginRight: 5}}
            color="#e0e0e0"
          />
          <TextInput
            placeholder="Waktu Selesai"
            placeholderTextColor="rgba(0,0,0,.4)"
            style={{width: '80%', color: '#536162'}}
            editable={false}
            value={timeEnd}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={datePicker}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e0e0e0',
            marginVertical: 7,
            borderRadius: 10,
            paddingLeft: 5,
          }}>
          <Icons
            name="calendar-outline"
            size={25}
            style={{marginRight: 5}}
            color="#e0e0e0"
          />
          <TextInput
            placeholder="Tanggal"
            placeholderTextColor="rgba(0,0,0,.4)"
            style={{width: '80%', color: '#536162'}}
            editable={false}
            value={date1}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setLamaMdl(!lamaMdl)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e0e0e0',
            marginVertical: 7,
            borderRadius: 10,
            paddingLeft: 5,
          }}>
          <Icons
            name="calendar-outline"
            size={25}
            style={{marginRight: 5}}
            color="#e0e0e0"
          />
          <TextInput
            placeholder="Lama Sewa"
            keyboardType={'number-pad'}
            placeholderTextColor="rgba(0,0,0,.4)"
            style={{width: '80%', color: '#536162'}}
            editable={false}
            value={lama + ' Jam'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={booking}>
          <Text style={styles.loginText}>Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Booking;

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
  datePickerStyle: {
    width: '90%',
    marginTop: 20,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    borderWidth: 1,
    padding: 6,
  },
});
