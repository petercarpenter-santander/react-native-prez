import React from "react";
import { Item } from 'common/hooks';
import { StyleSheet } from "../utils";

export default function ListItem({
  item,
  onClick,
  onRemove,
}: {
  item: Item;
  onClick: () => void;
  onRemove: () => void;
}) {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.checkbox,
          ...(item.completed && styles.checked),
        }}
        onClick={onClick}
      >
        <span style={styles.check}>✓</span>
      </div>
      <p style={{ ...styles.text, ...(item.completed && styles.checkedText) }}>
        {item.text}
      </p>
      <span style={styles.remove} onClick={onRemove}>
        ⓧ
      </span>
    </div>
  );
}

const styles: StyleSheet = {
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  checkedText: {
    textDecorationLine: "line-through",
  },
  checkbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    width: 20,
    height: 20,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 3,
    cursor: "pointer",
  },
  checked: {
    backgroundColor: "#00C80F",
  },
  check: {
    color: "#fff",
  },
  remove: {
    color: "#000",
    fontSize: 18,
    marginLeft: "auto",
    cursor: "pointer",
  },
};
