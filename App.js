import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, LogBox, Text } from 'react-native';
import base64 from 'react-native-base64';
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import 'firebase/auth';

function btoa(data) {
  return new base64(data, "binary").toString("base64");
}

function atob(data) {
  return new base64(data, "base64").toString("binary");
}

LogBox.ignoreAllLogs(['Setting a timer']);

export default function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);
  
  if (user === undefined) return null;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        { user ? <Text style = {{ fontSize: 40, textAlign: 'center', color: '#FFF' }} >Bienvenido</Text>  : <Auth /> }
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
  backgroundColor: '#15212b',
  height: '100%',
  },
  });