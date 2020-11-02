import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import styled from "styled-components";
import { belowHeight } from "../elements/utilities";

const CalculatorUpperScreen = () => {
    const { calculator } = useContext(CalculatorContext);
    const { savedValue, operator, error } = calculator;
    return (
        <CalculatorUpperScreenContainer>
            {error ? (
                <span>Error!</span>
            ) : (
                savedValue &&
                operator && (
                    <span>
                        {savedValue} {operator}
                    </span>
                )
            )}
        </CalculatorUpperScreenContainer>
    );
};

const CalculatorUpperScreenContainer = styled.div`
    font-family: Montserrat, sans-serif;
    color: #f2f2f2;
    font-size: 1.7rem;
    min-height: 2.5rem;
    ${belowHeight.xs`
        font-size: 1.4rem;
        min-height: 1.8rem;
        `}
    text-align: right;
    word-wrap: break-word;
`;

export default CalculatorUpperScreen;
