import { useCallback } from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { useFonts } from '@use-expo/font'
import * as SplashScreen from 'expo-splash-screen';
import Cards from './components/Cards';


const tab = createBottomTabNavigator();

function AccueilScreen() {
  const [fontsLoaded] = useFonts({
    'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
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
    <ScrollView style={{backgroundColor: "white"}}>
  <View style={styles.container}>
    <Image
      source={require('./assets/medias/logo-vinspy-long-1.png')}
      style={{width: 400, height: 175, resizeMode: "cover", top: 0, position: "relative", zIndex: 10 }}
    />
    <Image
      source={require('./assets/medias/semi-background-3.png')}
      style={{width: 400, height: 175, resizeMode: "cover", top: 0, position: "absolute" }}
    />
  </View>
  <View style={{position: "relative"}}>
      <Text style={styles.titre1}>LE MEILLEUR OUTIL POUR{"\n"}COP SUR VINTED !</Text>
      <View><Cards /></View>
      <Text style={styles.titre2}>DECOUVRE NOS OFFRES</Text>
    </View>
</ScrollView>
  );
}

function ProfilScreen() {
  return (
    <View style={styles.container}>
      <Text>Profil</Text>
    </View>
  );
}


function AlerteScreen() {
  return (
    <View style={styles.container}>
      <Text>Alertes</Text>
    </View>
  );
}

export default function App() {
  
  const [isFocused, setIsFocused] = useState(false);

  // Fonction pour mettre à jour la variable d'état lorsque la page est en focus
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Fonction pour mettre à jour la variable d'état lorsque la page n'est plus en focus
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <NavigationContainer>
      <tab.Navigator
      
        screenOptions={({  route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == " ") {
              iconName = "home";
            } else if (route.name == "  ") {
              iconName = "notifications";
            } else if (route.name == "   ") {
              iconName = "person";
            }

            return (
              <Ionicons
                name={iconName}
                size={30}
                color={focused || isFocused ? "#07858c" : "#09b1ba"}
              />
            );
          },
        })}
      >
        <tab.Screen name=" " component={AccueilScreen} />
        <tab.Screen name="  " component={AlerteScreen} />
        <tab.Screen name="   " component={ProfilScreen} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  titre1: {
    marginBottom: 75,
    flex: 1,
    fontFamily: "Raleway-Bold",
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  titre2: {
    flex: 1,
    fontFamily: "Raleway-Bold",
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
