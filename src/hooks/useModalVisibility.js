import { useState } from "react";

// Hook to segregate the modal visibility logic

export const useModalVisibility = () => {

  const [isModalVisible, setModalState] = useState(false);

  const setModalVisibility = () => {
    setModalState((currentState) => !currentState);
  };

  return { isModalVisible, setModalVisibility };
};
