import { useState } from "react";

// Hook to segregate the goal setting logic

export const useGoalHandler = () => {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  const saveGoalHandler = () => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { value: goal, key: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoalList((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== id)
    );
  };

  return { goalList, goalInputHandler, saveGoalHandler, deleteGoalHandler };
};
