import React, { useRef, useEffect, useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { LogContext } from "../context/LogContext";
import styled from "styled-components";
import { Name } from "../elements/components";
import { below } from "../elements/utilities";

const Logs = () => {
    const { calculator } = useContext(CalculatorContext);
    const { logs, addLog } = useContext(LogContext);
    const { log } = calculator;

    const previousRef = useRef();
    const previous = previousRef.current;

    const isEqual = ((prev, next) => {
        if (!!prev === !next) return false;
        else if (!!prev && !!next) {
            return (
                prev.operator === next.operator &&
                prev.savedValue === next.savedValue &&
                prev.prevValue === next.prevValue &&
                prev.calculatedValue === next.calculatedValue
            );
        }
        return true;
    })(previous, log);

    useEffect(() => {
        if (!isEqual) {
            previousRef.current = log;
            addLog(log);
        }
    });

    return (
        <LogContainer>
            {logs
                .slice(0)
                .reverse()
                .map((aLog) => (
                    <p key={aLog.id}>
                        <Name color={aLog.color}>{aLog.name === "" ? "Anonymous" : aLog.name}: </Name>
                        {aLog.savedValue} {aLog.operator} {aLog.prevValue} = {aLog.calculatedValue}
                    </p>
                ))}
        </LogContainer>
    );
};

const LogContainer = styled.div`
    position: absolute;
    margin-top: 1rem;
    top: 100%;
    left: 0.5rem;
    p {
        font-size: 1.8rem;
    }
    font-family: Montserrat, sans-serif;
    ${below.s`
    opacity: 0;
    pointer-events: none;
    `}
`;

export default Logs;
