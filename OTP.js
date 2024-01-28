import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity,TextInput, Alert} from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../firebaseConfig';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';

import { getAuth, signInWithCredential, PhoneAuthProvider } from 'firebase/auth';
const Otp = () => {
    const [phonenumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const auth = getAuth();
        const phoneProvider = new PhoneAuthProvider(auth);

        phoneProvider
            .verifyPhoneNumber(phonenumber, recaptchaVerifier.current)
            .then((verificationId) => {
                setVerificationId(verificationId);
                setPhoneNumber('');
            })
            .catch((error) => {
                console.error('Error sending verification code:', error);
            });
    };
    const confirmCode = () => {
        const auth = getAuth();
        const credential = PhoneAuthProvider.credential(
            verificationId,
            code
        );

        signInWithCredential(auth, credential)
            .then(() => {
                setCode('');
                Alert.alert(
                    'Login Successful',
                );
            })
            .catch((error) => {
                console.error('Error confirming verification code:', error);
                alert(error);
            });
    }
    return (
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <Text style={styles.otpText}>
                Login using OTP
            </Text>
            <TextInput
                placeholder="Phone Number With Country code"
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                <Text style = {styles.buttonText}>
                    send verification 
                </Text>
            </TouchableOpacity>
            <TextInput
                placeholder="Confirm code"
                onChangeText={setCode}
                keyboardType='number-pad'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendVerification} onPress={confirmCode}>
                <Text style = {styles.buttonText}>
                    confirm verification
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
        alignItems:'center',
        justifyContent: 'center'
    },
    textInput: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor: '#fff',
        borderBottomWidth:2,
        marginBottom: 20,
        textAlign: 'center',
        color:'#fff'
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10
    },
    sendCode:{
        padding:20,
        backgroundColor:'#9b59b6',
        borderRadius:10
    },
    buttonText: {
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'
    },
    otpText: {
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20
    }
});

export default Otp;
