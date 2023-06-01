import React from "react";

// React Native Components
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Set your goals!"
        onChangeText={props.onChange}
      />
      <Button title="Add Goal" onPress={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 30,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    width: "80%",
    padding: 10,
  },
});

export default GoalInput;
