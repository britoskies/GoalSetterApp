import { StyleSheet, SafeAreaView } from "react-native";

// Hooks
import { useGoalHandler } from "./src/hooks/useGoalHandler";

// Components
import GoalInput from "./src/components/GoalInput";
import GoalList from "./src/components/GoalList";

export default function App() {
  // Hook where all of the goal item logic is stored
  const { goalList, saveGoalHandler, goalInputHandler, deleteGoalHandler } =
    useGoalHandler();

  return (
    <SafeAreaView style={styles.container}>
      <GoalInput onChange={goalInputHandler} onPress={saveGoalHandler} />
      <GoalList listOfGoals={goalList} onDelete={deleteGoalHandler}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
});
