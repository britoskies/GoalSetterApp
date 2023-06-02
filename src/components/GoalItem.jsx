import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalView}>
        <Text style={styles.goalText}>{props.goal}</Text>
        <Image style={styles.trashIcon} source={require("../../assets/trash.png")}/>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#635985",
  },
  goalText: {
    color: "#fff",
    fontSize: 16
  },
  trashIcon: {
    width: 30,
    height: 30
  }
});

export default GoalItem;
