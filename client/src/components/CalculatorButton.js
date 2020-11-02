import React from "react";
import styled from "styled-components";
import { belowHeight } from "../elements/utilities";

const CalculatorButton = ({ children, width = 1, clickHandler }) => {
    return (
        <CalculatorButtonContainer onClick={clickHandler} width={width}>
            {children}
        </CalculatorButtonContainer>
    );
};

const CalculatorButtonContainer = styled.button`
    border: 1px solid #ddd;
    background-color: #f2f2f2;
    height: 100%;
    min-height: 6rem;
    ${belowHeight.xs`
        min-height: 3.25rem;
        `}
    grid-column: auto / span ${(props) => props.width};
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
    cursor: pointer;
`;

export default CalculatorButton;
