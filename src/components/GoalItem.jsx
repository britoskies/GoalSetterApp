import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalView}>
        <Text style={styles.goalText}>{props.goal}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalView: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#FFC090",
  },
  goalText: {
    color: "black",
  },
});

export default GoalItem;
