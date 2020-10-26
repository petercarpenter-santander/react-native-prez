import React, { useState } from "react";
import ListItem, { Item } from "./components/ListItem";
import NewItem from "./components/NewItem";
import { StyleSheet } from "./utils";
import { titleText } from "../../common/text";

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
    <div style={styles.container}>
      <h1 style={styles.title}>{titleText}</h1>
      <NewItem onSubmit={addItem} />
      <div style={styles.list}>
        {items.map((item) => (
          <ListItem
            item={item}
            onClick={() => markItemComplete(item.id)}
            onRemove={() => removeItem(item.id)}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

const styles: StyleSheet = {
  container: {
    maxWidth: 400,
    margin: "auto",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  title: {
    marginTop: 100,
    marginBottom: 50,
    fontSize: 25,
    fontWeight: 700,
    width: "100%",
    textAlign: "center",
    color: "#000",
  },
  list: {
    paddingTop: 20,
    width: "100%",
  },
};
