import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import CalculatorUpperScreen from "./CalculatorUpperScreen";
import styled from "styled-components";
import { belowHeight } from "../elements/utilities";

const CalculatorScreen = () => {
    const { calculator } = useContext(CalculatorContext);
    const { value, negative } = calculator;

    return (
        <CalculatorScreenContainer>
            <CalculatorUpperScreen />
            <span>
                {negative ? "-" : ""}
                {value}
            </span>
        </CalculatorScreenContainer>
    );
};

const CalculatorScreenContainer = styled.div`
    background: #666;
    color: white;
    font-family: Montserrat, sans-serif;
    font-size: 2.8rem;
    padding: 1.25rem;
    ${belowHeight.xs`
        font-size: 2.2rem;
        padding: .75rem;
        `}
    text-align: right;
    word-wrap: break-word;
`;

export default CalculatorScreen;
