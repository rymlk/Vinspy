import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

const BoutonModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Attention ⚠️</Text>
            <Text style={styles.modalText}>
              Pour créer des alertes vous avez besoin de créer un compte !
            </Text>
            <TouchableHighlight
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.buttonText2}>Je fonce en créer un !</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.buttonText}>CRÉER UNE ALERTE</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#09b1ba",
    width: "65%",
    height: "25%",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  modalTitle: {
    fontFamily: "Raleway-Bold",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalText: {
    fontFamily: "Raleway-Medium",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    fontFamily: "Raleway-Black",
    backgroundColor: "#09b1ba",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Raleway-Black",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText2: {
    fontSize: 15,
    fontFamily: "Raleway-Black",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BoutonModal;
