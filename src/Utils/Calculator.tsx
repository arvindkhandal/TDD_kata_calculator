type State = {
    currentValue: string;
    operator: string | null;
    previousValue: string | null;
    calculationString: string;
    waitingForNewValue: boolean;
  };

export const initialState = {
    currentValue: "0", 
    operator: null,
    previousValue: null,
    calculationString: "",
    waitingForNewValue: false,
};
  
export const handleNumber = (value, state) => {
    const { currentValue, calculationString, waitingForNewValue } = state;

    const updatedValue = waitingForNewValue ? `${value}` : `${currentValue}${value}`;
  
    const updatedCalculationString =
      waitingForNewValue || !calculationString
        ? `${state.previousValue || ""} ${state.operator || ""} ${value}`.trim()
        : `${calculationString}${value}`;
  
    return {
      ...state,
      currentValue: updatedValue,
      calculationString: updatedCalculationString,
      waitingForNewValue: false,
    };
  };

  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
    case "clear":
        return initialState;
    case "posneg":
        return {
          ...state,
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
    case "percentage":
        return {
          ...state,
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      default:
        return state;
    }
  };
  
  export default calculator;
