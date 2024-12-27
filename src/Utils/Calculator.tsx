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
export const handleNumber = (value:any, state:any) => {
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
  export const handleOperator = (value: string, state: State): State => {
    const { currentValue, previousValue, operator, calculationString } = state;
    if (operator && !state.waitingForNewValue) {
      const resultState = handleEqual(state);
      return handleOperator(value, resultState);
    }
    return {
      ...state,
      operator: value,
      previousValue: currentValue,
      waitingForNewValue: true,
      calculationString: `${calculationString || currentValue} ${value}`,
    };
  };
  export const handleEqual = (state:any) => {
    const { currentValue, previousValue, operator, calculationString } = state;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    if (isNaN(previous) || isNaN(current) || !operator) {
      return state;
    }
    let result;
    if (operator === "/") {
      result = previous / current;
    } else if (operator === "*") {
      result = previous * current;
    } else if (operator === "+") {
      result = previous + current;
    } else if (operator === "-") {
      result = previous - current;
    }
    return {
      currentValue: `${result}`,
      calculationString: `${calculationString} ${currentValue} = ${result}`,
      operator: null,
      previousValue: null,
      waitingForNewValue: false,
    };
  };
  const calculator = (type:any, value:any, state:any) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "operator":
        return handleOperator(value, state);
      case "equal":
        return handleEqual(state);
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









