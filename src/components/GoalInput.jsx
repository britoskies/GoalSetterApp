import React from "react";

// React Native Components
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/goal-logo-white.png')}/>
        <TextInput
          style={styles.inputText}
          placeholder="Set your goals!"
          onChangeText={props.onChange}
        />
        <View style={styles.buttonView}>
          <Button
            title="Cancel"
            color="#EB455F"
            onPress={props.setVisibility}
          />
          <Button
            title="Add Goal"
            color="#F1DBBF"
            onPress={() => {
              props.onPress();
              props.setVisibility();
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#393053",
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    width: "80%",
    padding: 10,
    backgroundColor: "#FFF",
    fontSize: 16,
  },
  buttonView: {
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 140,
    height: 120,
    margin: 20,
  }
});

export default GoalInput;
