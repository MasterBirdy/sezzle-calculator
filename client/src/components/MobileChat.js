import React, { useContext } from "react";
import { LogContext } from "../context/LogContext";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Name } from "../elements/components";

const MobileChat = ({ mobileMenuOn, timesHandler }) => {
    const { logs } = useContext(LogContext);

    return (
        <Overlay className={mobileMenuOn ? "test" : ""}>
            <ButtonWrapper onClick={timesHandler}>
                <FaTimes />
            </ButtonWrapper>
            <ChatContainer>
                <ChatHeader>Chat</ChatHeader>
                {logs
                    .slice(0)
                    .reverse()
                    .map((aLog) => (
                        <ChatLine key={aLog.id}>
                            <Name color={aLog.color}>{aLog.name === "" ? "Anonymous" : aLog.name}: </Name>
                            {aLog.savedValue} {aLog.operator} {aLog.prevValue} = {aLog.calculatedValue}
                        </ChatLine>
                    ))}
            </ChatContainer>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0.75rem;
    z-index: 100;
    background: rgba(255, 255, 255, 1);
    background: linear-gradient(162deg, rgba(255, 255, 255, 1) 65%, rgba(220, 220, 220, 1) 100%);
    opacity: 0;

    pointer-events: none;
    &.test {
        opacity: 1;
        pointer-events: auto;
    }
`;

const ButtonWrapper = styled.div`
    position: fixed;
    font-size: 4rem;
    color: black;
    top: 1rem;
    right: 1rem;
`;

const ChatContainer = styled.div`
    text-align: center;
`;

const ChatHeader = styled.h1`
    margin-top: 2rem;
    font-size: 4rem;
`;

const ChatLine = styled.p`
    font-size: 2rem;
`;

export default MobileChat;
