import React, {useState} from 'react';
import {TouchableOpacity, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';
import Splash from './src/Splash';
import Login from './src/Login';
import Daftar from './src/Daftar';
import Home from './src/Home';
import Setting from './src/Setting';
import ListBooking from './src/ListBooking';
import History from './src/History';
import Notifikasi from './src/Notifikasi';
import Booking from './src/Booking';
import Pembayaran from './src/Pembayaran';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#28DF99',
        style: {borderTopWidth: 1, elevation: 0, borderTopColor: '#f5f5f5'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={navigation => ({
          tabBarIcon: ({color}) => (
            <Icons name="md-home" color={color} size={24} />
          ),
        })}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="md-settings-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function BookingStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListBooking"
        component={ListBooking}
        options={{
          
          headerStyle: {backgroundColor: '#28DF99'},
          headerTintColor: '#f3f4ed',
          headerTitle: 'Daftar Booking',
          title: 'Daftar Booking', //Set Header Title
          headerRight: ({tintColor}) => (
            <Icons name='add' color={tintColor} size={34} style={{paddingRight:10}} onPress={()=>navigation.navigate('Booking')}/>
          )
        }}
      />
    </Stack.Navigator>
  );
}



function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Daftar"
          component={Daftar}
          options={{
            headerStyle: {backgroundColor: '#28DF99'},
            headerTintColor: '#f3f4ed',
            headerTitle: 'Daftar',
          }}
        />

        <Stack.Screen
          name="ListBooking"
          component={BookingStack}
          options={{
            headerShown:false
            // headerRight: ({tintColor})=> (
             
            // )
          }}
          
        />

        <Stack.Screen
          name="HistoryBooking"
          component={History}
          options={{
            headerStyle: {backgroundColor: '#28DF99'},
            headerTintColor: '#f3f4ed',
            headerTitle: 'History Booking',
          }}
        />

        <Stack.Screen
          name="Notifikasi"
          component={Notifikasi}
          options={{
            headerStyle: {backgroundColor: '#28DF99'},
            headerTintColor: '#f3f4ed',
            headerTitle: 'Notifikasi'
            
          }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{
            headerStyle: {backgroundColor: '#28DF99'},
            headerTintColor: '#f3f4ed',
            headerTitle: 'Booking',
          }}
        />
        <Stack.Screen
          name="Pembayaran"
          component={Pembayaran}
          options={{
            headerStyle: {backgroundColor: '#28DF99'},
            headerTintColor: '#f3f4ed',
            headerTitle: 'Pembayaran',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
