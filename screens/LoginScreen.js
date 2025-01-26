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
        <Text style={styles.appName}>NAME OF DELIVERY</Text>

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
          <TouchableOpacity>
            <Image
              source={require("../assets/phone.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
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
    resizeMode: "cover", // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  appName: {
    fontSize: 48,
    fontFamily: "Jolly Lodger", // Ensure the font is loaded in the app
    color: "#D4E9F0",
    marginBottom: 20,
  },
  deliveryGuyImage: {
    width: 150,
    height: 150, // Adjust size as needed
    marginBottom: 20,
  },
  loginText: {
    fontSize: 26,
    fontFamily: "Jersey 25", // Ensure the font is loaded in the app
    color: "#E1E1E1",
    textAlign: "center",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%", // Adjust width for icon spacing
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50, // Adjust size as needed
  },
  noRegistrationText: {
    fontSize: 26,
    fontFamily: "Jersey 25", // Ensure the font is loaded in the app
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
  },
});