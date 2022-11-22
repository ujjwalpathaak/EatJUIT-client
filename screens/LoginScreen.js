import { View, Text, TextInput, Button, Alert, Touchable, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("")
  const [code, setCode] = useState("")
  const [verificationId, setVerificationId] = useState(null)
  const recaptchaVerifier = useRef(null)

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId)
      setPhoneNumber('')
  }

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
    .then(() => {
      setCode('');
    })
    .catch((err) => {
      alert(err)
    })
    Alert.alert(
      'login success. welcome to dashboard'
    )
  }

  // Hiding Headers
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-col items-center bg-[#fbfbfb] h-[100vh] w-[100vw]">
      <View className="h-[80vh] w-[80vw] flex-col justify-center">
        <View className="w-full mb-12">
          <Text className="text-[#ef5b5b] font-extrabold text-3xl">
            Log in to your
          </Text>
          <Text className="text-[#ef5b5b] font-extrabold text-3xl">
            account
          </Text>
        </View>
        <View>
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
          />
          <TextInput
            placeholder="Phone Number with Country Code"
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            autoCompleteType="tel"
          />
          <TouchableOpacity onPress={sendVerification}> 
            <Text>
              Send Verification
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Confirm Code"
            onChangeText={setCode}
            keyboardType='number-pad' 
          />
          <TouchableOpacity onPress={confirmCode}> 
            <Text>
              Confirm Verification
            </Text>
          </TouchableOpacity>
          <View className="mt-12">
            <Button className="rounded-full" color="#ef5b5b" title="Log in" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
