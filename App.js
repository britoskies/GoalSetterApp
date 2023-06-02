import { StyleSheet, SafeAreaView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

// Hooks
import { useGoalHandler } from "./src/hooks/useGoalHandler";
import { useModalVisibility } from "./src/hooks/useModalVisibility";

// Components
import GoalInput from "./src/components/GoalInput";
import GoalList from "./src/components/GoalList";

export default function App() {

  const { goalList, saveGoalHandler, goalInputHandler, deleteGoalHandler } =
    useGoalHandler();

  const { isModalVisible, setModalVisibility } = useModalVisibility();

  return (
    <>
    <StatusBar style="light"/>
    <SafeAreaView style={styles.container}>
      <Button title="Add New Goal" color="#F1DBBF" onPress={setModalVisibility} />
      {isModalVisible && (
        <GoalInput
          isVisible={isModalVisible}
          setVisibility={setModalVisibility}
          onChange={goalInputHandler}
          onPress={saveGoalHandler}
        />
      )}
      <GoalList listOfGoals={goalList} onDelete={deleteGoalHandler} />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 40,
  },
});
