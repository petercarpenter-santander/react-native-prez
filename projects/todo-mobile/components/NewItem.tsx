import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Alert } from "react-native";

export default function NewItem({
  onSubmit,
}: {
  onSubmit: (text: string) => void;
}) {
  const [value, setValue] = useState("");
  const showError = () =>
    Alert.alert(
      "Error creating item!",
      "You cannot create an item without a name."
    );
  const submit = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Item name"
      />
      <Button
        title="   Add New   "
        onPress={() => (value ? submit() : showError())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  input: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 3,
    width: "60%",
    paddingHorizontal: 10,
  },
});
