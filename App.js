import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import React, {useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  // React Native Firebase
  // cloud messaging-usage
  const requestUserPermission = async() => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  useEffect(() => {
    if (requestUserPermission()){
      messaging().getToken().then(token => {
        console.log(token);
      });
    }
    else {
      console.log("Failed token status", authStatus);
    }
    //Cloud messaging- notifications
    messaging()
      .getInitialNotification()
      .then( async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
    });
    messaging().onNotificationOpenedApp( async(remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    // cloud messaging
    // Register background handler
    const unsubscribe = messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    });
    // foreground state handler
    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;

  },[])

  return (
    <View style={styles.container}>
      <Text>GoEco Notifications using react native & expo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
