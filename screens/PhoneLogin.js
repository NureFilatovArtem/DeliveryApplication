import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

export default function PhoneLogin({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Name of Delivery Application */}
        <Text style={styles.appName}>EVERYTHING TOGETHER</Text>

        {/* Delivery Guy Image */}
        <Image
          source={require("../assets/DeliveryGuy.png")}
          style={styles.deliveryGuyImage}
        />

        {/* Log in Text */}
        <Text style={styles.loginText}>Enter your phone number</Text>

        {/* Phone Number Input */}
        <View style={styles.phoneInputContainer}>
          <View style={styles.phoneCode}>
            <Text style={styles.phoneCodeText}>+32</Text>
          </View>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="000 00 00"
            placeholderTextColor="#E1E1E1"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Additional Text */}
        <Text style={styles.additionalText}>OR CONTINUE WITH GOOGLE</Text>

        {/* CONTINUE Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  appName: {
    fontSize: 56,
    fontFamily: "Jolly Lodger",
    color: "#D4E9F0",
    marginBottom: 30,
    textAlign: "center",
  },
  deliveryGuyImage: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  loginText: {
    fontSize: 24,
    fontFamily: "Jersey 25",
    fontWeight: "bold",
    color: "#E1E1E1",
    textAlign: "center",
    marginBottom: 30,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 334,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1",
    marginBottom: 30,
  },
  phoneCode: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: "#E1E1E1",
  },
  phoneCodeText: {
    fontSize: 18,
    color: "#E1E1E1",
  },
  phoneNumberInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#E1E1E1",
  },
  additionalText: {
    fontSize: 18,
    fontFamily: "Jersey 25",
    color: "#E1E1E1",
    textAlign: "center",
    marginBottom: 20,
  },
  continueButton: {
    width: 334,
    height: 44,
    borderRadius: 16,
    backgroundColor: "#EFA52E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: "Jersey 25",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});