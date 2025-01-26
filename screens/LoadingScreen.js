import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function LoadingScreen({ onFinish }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Jolly Lodger": require("../assets/fonts/JollyLodger.ttf"),
      "Jersey 25": require("../assets/fonts/Jersey25.ttf"),
    });
    setFontsLoaded(true);
    onFinish(); // Notify parent that fonts are loaded
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading Fonts...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D2C51",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});