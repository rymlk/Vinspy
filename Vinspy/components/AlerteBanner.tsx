import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AlerteBanner() {
  return (
    <View>
      <View style={styles.card1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    height: "10%",
    resizeMode: "cover",
    backgroundColor: "#09b1ba",
    borderRadius: 20,
  },
});
