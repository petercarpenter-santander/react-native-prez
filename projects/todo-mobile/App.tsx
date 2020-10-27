import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import NewItem from "./components/NewItem";
import ListItem, { Item } from "./components/ListItem";

export default function App() {
  const [items, setItems] = useState<Item[]>([
    { completed: false, text: "Item 1", id: "1" },
    { completed: true, text: "Item 2", id: "2" },
  ]);

  const randomId = () => Date.now().toString();

  const addItem = (text: string) =>
    setItems((prevItems) => [
      { text, completed: false, id: randomId() },
      ...prevItems,
    ]);

  const removeItem = (id: string) =>
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

  const markItemComplete = (id: string) =>
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>ToDo App</Text>
      <NewItem onSubmit={addItem} />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => markItemComplete(item.id)}
            onRemove={() => removeItem(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  title: {
    marginTop: 80,
    marginBottom: 50,
    fontSize: 25,
    fontWeight: "700",
    width: "100%",
    textAlign: "center",
    color: "#000",
  },
  list: {
    marginVertical: 20,
    width: "100%",
    paddingBottom: 20,
  },
});
