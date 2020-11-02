import React, { useContext } from "react";
import styled from "styled-components";
import CalculatorButton from "./CalculatorButton";
import CalculatorScreen from "./CalculatorScreen";
import { CalculatorContext } from "../context/CalculatorContext";
import CALCULATOR_CONSTANTS from "../constants/calculatorConstants";
import CALCULATOR_OPERATORS from "../constants/calculatorOperators";

const Calculator = ({ children }) => {
    const { dispatch } = useContext(CalculatorContext);

    const addValue = (val) => {
        dispatch({ type: CALCULATOR_CONSTANTS.ADD_VALUE, payload: val });
    };
    const addOperator = (val) => {
        dispatch({ type: CALCULATOR_CONSTANTS.ADD_OPERATOR, payload: val });
    };

    return (
        <CalculatorBox>
            <CalculatorScreen />
            <CalculatorButtonGrid>
                <CalculatorButton clickHandler={() => dispatch({ type: CALCULATOR_CONSTANTS.CLEAR_VALUE })}>
                    AC
                </CalculatorButton>
                <CalculatorButton clickHandler={() => dispatch({ type: CALCULATOR_CONSTANTS.REMOVE_VALUE })}>
                    DEL
                </CalculatorButton>
                <CalculatorButton clickHandler={() => dispatch({ type: CALCULATOR_CONSTANTS.MAKE_NEGATIVE })}>
                    ±
                </CalculatorButton>
                <CalculatorButton clickHandler={() => addOperator(CALCULATOR_OPERATORS.DIVIDE_SIGN)}>
                    ÷
                </CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(1)}>1</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(2)}>2</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(3)}>3</CalculatorButton>
                <CalculatorButton clickHandler={() => addOperator(CALCULATOR_OPERATORS.TIMES_SIGN)}>×</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(4)}>4</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(5)}>5</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(6)}>6</CalculatorButton>
                <CalculatorButton clickHandler={() => addOperator(CALCULATOR_OPERATORS.MINUS_SIGN)}>-</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(7)}>7</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(8)}>8</CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(9)}>9</CalculatorButton>
                <CalculatorButton clickHandler={() => addOperator(CALCULATOR_OPERATORS.PLUS_SIGN)}>+</CalculatorButton>
                <CalculatorButton clickHandler={() => dispatch({ type: CALCULATOR_CONSTANTS.ADD_DECIMAL })}>
                    .
                </CalculatorButton>
                <CalculatorButton clickHandler={() => addValue(0)}>0</CalculatorButton>
                <CalculatorButton
                    width="2"
                    clickHandler={() => dispatch({ type: CALCULATOR_CONSTANTS.EQUALS_OPERATOR })}
                >
                    =
                </CalculatorButton>
            </CalculatorButtonGrid>
            {children}
        </CalculatorBox>
    );
};

const CalculatorBox = styled.div`
    position: relative;
    width: 95%;
    max-width: 30rem;
    border: 1px solid #999;
    box-shadow: 5px 6px 12px -7px rgba(204, 204, 204, 1);
`;

const CalculatorButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export default Calculator;
