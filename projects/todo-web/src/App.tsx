import React from "react";
import { useTodo } from "common/hooks";
import ListItem from "./components/ListItem";
import NewItem from "./components/NewItem";
import { StyleSheet } from "./utils";

export default function App() {
  const { items, addItem, removeItem, markItemComplete } = useTodo();
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ToDo App</h1>
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
