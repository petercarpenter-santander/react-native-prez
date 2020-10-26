import React, { useState } from "react";
import { StyleSheet } from "../utils";

export default function NewItem({
  onSubmit,
}: {
  onSubmit: (text: string) => void;
}) {
  const [value, setValue] = useState("");
  const showError = () =>
    alert("Error creating item! You cannot create an item without a name.");
  const submit = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Item name"
      />
      <button onClick={() => (value ? submit() : showError())}>Add New</button>
    </div>
  );
}

const styles: StyleSheet = {
  container: {
    display: 'flex',
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
    paddingLeft: 10,
    paddingRight: 10,
  },
};
