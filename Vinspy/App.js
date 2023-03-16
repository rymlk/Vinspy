import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";

const tab = createBottomTabNavigator();

function AccueilScreen() {
  return (
    <View style={styles.container}>
          <Image
          source={require('./assets/medias/logo-vinspy-long-1.png')}
          style={{width: 400, height: 175, resizeMode: "cover", top: 0, position: "absolute", zIndex: 10 }}
        />
      <Image
          source={require('./assets/medias/semi-background-3.png')}
          style={{width: 400, height: 175, resizeMode: "cover", top: 0, position: "absolute" }}
        />
        <View>
        <ScrollView>
          <Text style={{top: 0, position: "relative", zIndex: 15}}></Text>
        </ScrollView>
        </View>
    </View>
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
                size={27}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
