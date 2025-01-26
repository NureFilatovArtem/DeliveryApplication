import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Name of Delivery Application */}
        <Text style={styles.appName}>Everything Together</Text>

        {/* Delivery Guy Image */}
        <Image
          source={require("../assets/DeliveryGuy.png")}
          style={styles.deliveryGuyImage}
        />

        {/* Log in Text */}
        <Text style={styles.loginText}>
          LOG IN WITH YOUR PHONE NUMBER OR EMAIL
        </Text>

        {/* Phone and Gmail Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Image
              source={require("../assets/phone.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Image
              source={require("../assets/gmail.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Log in without Registration */}
        <TouchableOpacity>
          <Text style={styles.noRegistrationText}>
            LOG IN WITHOUT REGISTRATION
          </Text>
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
    resizeMode: "cover", // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  appName: {
    fontSize: 56,
    fontFamily: "Jolly Lodger", // Ensure the font is loaded in the app
    color: "#D4E9F0",
    marginBottom: 30,
    textAlign: "center",
  },
  deliveryGuyImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24 ,
    fontFamily: "Jersey 25", // Ensure the font is loaded in the app
    color: "#E1E1E1",
    textAlign: "center",
    marginBottom: 30,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  iconWrapper: {
    marginHorizontal: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  noRegistrationText: {
    fontSize: 22,
    fontFamily: "Jersey 25",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 30,
    textDecorationLine: "underline", // Add underline
  },
});
