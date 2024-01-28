import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      
      <Text></Text>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1698424520/logo_cunpzc.jpg' }}
        />
        <Text style={styles.appName}>GO ECO</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Navigate to Sign In')}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Navigate to Sign Up')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'baseline',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    flex:1,
    justifyContent:'flex-start',
    display:'flex',
    

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    
    position:"relative",
  },
  appName: {
    fontSize: 30,
    fontFamily: 'cursive',
    marginLeft: 30,
    // color:'white',
    
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    textDecorationLine: 'none',
    margin: 10,
    borderRadius: 20,
    fontSize: 18,
    borderColor: '#b0aca2',
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // You can use 'cover', 'contain', 'stretch', etc.
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});

export default LandingPage;




