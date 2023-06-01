import React from "react";
import GoalItem from "./GoalItem";

import { StyleSheet, View, FlatList, ScrollView } from "react-native";

function GoalList(props) {
  return (
    <View style={styles.goalContainer}>
      <FlatList
        data={props.listOfGoals}
        renderItem={({ item }) => (
          <GoalItem id={item.key} goal={item.value} onDelete={props.onDelete} />
        )}
      />
      {/* <ScrollView>
          {listOfGoals.map((goal, index) => (
            <View key={index} style={styles.goalView}>
              <Text key={index} style={styles.goalText}>
                {goal.value}
              </Text>
            </View>
          ))}
        </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    marginTop: 30,
  },
});

export default GoalList;
