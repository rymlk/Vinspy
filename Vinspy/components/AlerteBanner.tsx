import { useFonts } from "@use-expo/font";
import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import BoutonModal from "./BoutonModal";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Animated, {
  Layout,
  SlideInLeft,
  SlideInRight,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { FadeIn, FadeInDown } from "react-native-reanimated";

export default function AlerteBanner() {
  const [fontsLoaded] = useFonts({
    "Raleway-Black": require("../assets/fonts/Raleway-Black.ttf"),
    "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Image
        source={require("../assets/medias/bell1.gif")}
        style={{
          top: "3%",
          width: "35%",
          height: "15%",
          position: "absolute",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          zIndex: 100000,
        }}
      />
      <Animated.Image
        entering={SlideInLeft}
        exiting={ZoomOut}
        source={require("../assets/medias/background-alert-card-1.png")}
        style={{
          width: 400,
          height: 500,
          resizeMode: "cover",
          top: "-5%",
          position: "absolute",
          zIndex: 900,
        }}
      />
      <Animated.Image
        entering={ZoomIn}
        exiting={ZoomOut}
        source={require("../assets/medias/background-alert-card-2.png")}
        style={{
          width: 400,
          height: 500,
          resizeMode: "cover",
          top: "-5%",
          position: "absolute",
          zIndex: 1000,
        }}
      />
      <Animated.Image
        entering={SlideInRight}
        exiting={ZoomOut}
        source={require("../assets/medias/background-alert-card-3.png")}
        style={{
          width: 400,
          height: 500,
          resizeMode: "cover",
          top: "-5%",
          position: "absolute",
          zIndex: 900,
        }}
      />
      <Image
        source={require("../assets/medias/background-alert-v2.png")}
        style={{
          width: 400,
          height: 500,
          resizeMode: "cover",
          top: 0,
          position: "relative",
          marginBottom: 30,
        }}
      />
      <BoutonModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#09b1ba",
    width: "75%",
    height: "12%",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Raleway-Black",

    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
