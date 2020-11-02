import React, { createContext, useReducer } from "react";
import { calculatorReducer } from "../reducers/calculatorReducer";

export const CalculatorContext = createContext(null);

const CalculatorProvider = ({ children }) => {
    const [calculator, dispatch] = useReducer(calculatorReducer, { value: "0" });
    return <CalculatorContext.Provider value={{ calculator, dispatch }}>{children}</CalculatorContext.Provider>;
};

export default CalculatorProvider;
