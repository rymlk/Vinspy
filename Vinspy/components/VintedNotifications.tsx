import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import VintedMonitor from "vinted-monitor"; // Importer le module VintedMonitor

function VintedNotifications() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const Monitor = new VintedMonitor(5 * 60 * 1000);

    Monitor.watch(
      "https://www.vinted.fr/vetements?order=newest_first&brand_id[]=53&search_text=nike%20dunk%20low"
    );

    Monitor.onItemFound((item) => {
      setItems((prevItems) => [...prevItems, item]);
    });
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>I detect a new Item !</Text>
      <Text>The item name is {item.info.title}</Text>
      <Text>This item costs {item.info.price} €</Text>
      <Text>This item was posted on {item.info.date.toString()}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: "center", padding: 10 }}>
        Liste des articles trouvés :
      </Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.info.id}
      />
    </View>
  );
}

export default VintedNotifications;
