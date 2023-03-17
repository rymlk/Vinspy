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

export default function Cards() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card1}>
          <Image
            source={require("../assets/medias/gif3.gif")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 75,
              height: 75,
              resizeMode: "cover",
              top: 0,
              zIndex: 10,
            }}
          />
        </View>
        <View style={styles.card1}>
          <Image
            source={require("../assets/medias/gif4.gif")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 75,
              height: 75,
              resizeMode: "cover",
              top: 7,
              zIndex: 10,
            }}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.card1}>
            <Image
              source={require("../assets/medias/gif2.gif")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 75,
                height: 75,
                resizeMode: "cover",
                top: 7,
                zIndex: 10,
              }}
            />
          </View>
          <View style={styles.card1}>
            <Image
              source={require("../assets/medias/gif1.gif")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 75,
                height: 75,
                resizeMode: "cover",
                top: 7,
                zIndex: 10,
              }}
            />
            <Text>Test</Text>
          </View>
        </View>
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
    height: 210,
    resizeMode: "cover",
    backgroundColor: "#09b1ba",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  semicard2: {
    width: 10,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
    margin: 5,
    justifyContent: "space-between",
  },
});
