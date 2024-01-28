import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://res.cloudinary.com/dfwchdncf/image/upload/v1698424520/logo_cunpzc.jpg' }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleForm}>
            <Text style={[styles.button, !isSignIn && styles.activeButton]}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleForm}>
            <Text style={[styles.button, isSignIn && styles.activeButton]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        {isSignIn ? (
          <View>
            <TextInput style={styles.input} placeholder="Register Number" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TextInput style={styles.input} placeholder="Register Number" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '10%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: '#a5abb5',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
  activeButton: {
    borderColor: 'black',
  },
  content: {},
  input: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  signInButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'right',
    marginVertical: 20,
    color: 'black',
  },
});

export default App;
