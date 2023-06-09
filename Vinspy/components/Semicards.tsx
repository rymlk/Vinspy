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

export default function Semicards() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card1}></View>
        <View style={styles.card1}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card1: {
    margin: 15,
    width: 150,
    height: 30,
    resizeMode: "cover",
    backgroundColor: "#09b1ba",
    borderRadius: 20,
    justifyContent: "space-between",
  },
});
