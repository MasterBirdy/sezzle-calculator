import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Logs from "./components/Logs";
import { Container } from "./elements/components";
import CalculatorProvider from "./context/CalculatorContext";
import LogProvider from "./context/LogContext";
import NameForm from "./components/NameForm";
import styled from "styled-components";
import { below, belowHeight } from "./elements/utilities";
import MobileChat from "./components/MobileChat";
import { BsChatDots } from "react-icons/bs";

function App() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const timesHandler = () => {
        setMobileMenu(false);
    };

    return (
        <Router>
            <CalculatorProvider>
                <PageContainer>
                    <LogProvider>
                        <Route path="/">
                            <Header>Sezzle Calculator 🔢</Header>
                            <NameForm />
                            <Calculator>
                                <Logs />
                            </Calculator>
                            <MobileChat mobileMenuOn={mobileMenu} timesHandler={timesHandler} />
                            <ChatIconWrapper
                                onClick={() =>
                                    setMobileMenu((prev) => {
                                        console.log(prev);
                                        return !prev;
                                    })
                                }
                            >
                                <BsChatDots />
                            </ChatIconWrapper>
                        </Route>
                    </LogProvider>
                </PageContainer>
            </CalculatorProvider>
        </Router>
    );
}
const Header = styled.h1`
    margin-bottom: 1rem;
    font-size: 3.2rem;
    ${below.s`
    font-size: 2.75rem;
    `}
    color: #333;
`;

const PageContainer = styled(Container)`
    position: relative;
    height: 86.5vh;
    ${belowHeight.xs`
        height: 97.5vh;
        `}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ChatIconWrapper = styled.div`
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    font-size: 4rem;
    opacity: 0;
    pointer-events: none;
    ${below.s`
        opacity: 1;
        pointer-events: auto;
    `}
`;

export default App;
