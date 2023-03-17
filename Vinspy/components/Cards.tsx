import React, { useState } from "react";
import { useCallback, useEffect } from "react";
import Animated, {
  Layout,
  ZoomIn,
  ZoomInLeft,
  ZoomInRight,
  ZoomOut,
} from "react-native-reanimated";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { SlideInLeft } from "react-native-reanimated";

export default function Cards() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Animated.View style={styles.card1} entering={ZoomInLeft}>
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
          <Text style={styles.texte10}>
            Vinspy vous alerte en temps réel lorsque de nouveaux articles sont
            mis en ligne sur Vinted
          </Text>
        </Animated.View>
        <Animated.View style={styles.card1} entering={ZoomInRight}>
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
          <Text style={styles.texte10}>
            L'application la plus rapide du marché ne manquez donc plus une
            seule occasion !
          </Text>
        </Animated.View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Animated.View style={styles.card1} entering={ZoomInLeft}>
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
            <Text style={styles.texte10}>
              Plus qu'une simple application, Vinspy est votre outil pour cop et
              ainsi gagner de l'argent !
            </Text>
          </Animated.View>
          <Animated.View style={styles.card1} entering={ZoomInRight}>
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
            <Text style={styles.texte10}>
              Dôté d'une interface simple et conviviale, Vinspy vous permet
              facilement de créer des alertes personnalisées
            </Text>
          </Animated.View>
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
    width: 155,
    height: 200,
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
  texte10: {
    color: "white",
    top: 15,
    flex: 1,
    fontFamily: "Raleway-Medium",
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  texte11: {
    color: "white",
    top: 10,
    flex: 1,
    fontFamily: "Raleway-Medium",
    fontSize: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
