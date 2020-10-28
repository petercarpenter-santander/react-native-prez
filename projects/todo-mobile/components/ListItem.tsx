import React from "react";
import { Item } from "common/hooks";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ListItem({
  item,
  onPress,
  onRemove,
}: {
  item: Item;
  onPress: () => void;
  onRemove: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.checkbox, item.completed && styles.checked]}>
          <Text style={styles.check}>✓</Text>
        </View>
        <Text style={[styles.text, item.completed && styles.checkedText]}>
          {item.text}
        </Text>
        <TouchableOpacity
          onPress={onRemove}
          style={styles.remove}
          hitSlop={{ left: 5, right: 5, top: 5, bottom: 5 }}
        >
          <Text style={styles.removeText}>ⓧ</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: "5%",
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
  checkedText: {
    textDecorationLine: "line-through",
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    width: 25,
    height: 25,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 3,
  },
  checked: {
    backgroundColor: "#00C80F",
  },
  check: {
    color: "#fff",
  },
  remove: {
    marginLeft: "auto",
  },
  removeText: {
    color: "#000",
    fontSize: 20,
  },
});
