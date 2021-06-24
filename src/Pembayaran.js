import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar,ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Pembayaran = ({navigation, route}) => {

const konfirmasi = () =>{

    AsyncStorage.getItem('id_user')
    .then(res => {
        let data = {
            tanggal:route.params.tanggal,
            jam_masuk : route.params.waktu_mulai,
            jam_keluar : route.params.waktu_selesai,
            total_jam : route.params.lama,
            total_harga : route.params.lama * 60000,
            id_user:res
        }

        fetch('http://192.168.43.161:8000/booking/add',{
            method:'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.status == 200){
                ToastAndroid.show('Berhasil Booking',ToastAndroid.SHORT)
                navigation.replace("ListBooking")
            } else {
                alert('Gagal Booking')
            }
        })
    })
}

  useEffect(() => {
  });
  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <StatusBar
        backgroundColor="#28DF99"
        animated
        showHideTransition="fade"
        barStyle="light-content"
      />
      <View
        style={{
          paddingVertical: 15,
          borderBottomColor: '#D2F6C5',
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            color: '#28DF99',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Konfirmasi Pembayaran
        </Text>
      </View>
      <View style={{padding: 15}}>
    
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '40%'}}>
            <Text style={{color: '#536162'}}>Tanggal </Text>
          </View>
          <View>
            <Text style={{color: '#536162'}}>: {route.params.tanggal}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '40%'}}>
            <Text style={{color: '#536162'}}>Waktu Mulai </Text>
          </View>
          <View>
            <Text style={{color: '#536162'}}>: {route.params.waktu_mulai}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '40%'}}>
            <Text style={{color: '#536162'}}>Waktu Selesai </Text>
          </View>
          <View>
            <Text style={{color: '#536162'}}>
              : {route.params.waktu_selesai}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '40%'}}>
            <Text style={{color: '#536162'}}>Lama Sewa </Text>
          </View>
          <View>
            <Text style={{color: '#536162'}}>: {route.params.lama} Jam</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '40%'}}>
            <Text style={{color: '#536162'}}>Total Harga </Text>
          </View>
          <View>
            <Text style={{color: '#536162'}}>
              : Rp{route.params.lama * 60000} (Rp 60.000 / Jam )
            </Text>
          </View>
        </View>
        <View style={{padding:10}}>
          <Text style={{color:'#FF3E6D'}}>
            NB : Anda dapat melakukan pembayaran via Indomaret dengan kode{' '}
            {new Date().getTime()} Atau ke rekening BCA Pemilik A/N Rudi Tabuti
            : 1094234 Dalam 30 Menit. Dalam 30 Menit tidak melakukan pembayaran maka otomatis pesanan akan dibatalkan.
          </Text>
          <TouchableOpacity style={{width:'80%',backgroundColor:'#28DF99', alignSelf:'center',borderRadius:10,elevation:4,padding:10,marginTop:30}} onPress={konfirmasi}>
            <Text style={{textAlign:'center',color:'#F6F7D4'}}>Konfirmasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Pembayaran;
