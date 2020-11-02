import React, { useContext } from "react";
import styled from "styled-components";
import { LogContext } from "../context/LogContext";

const NameForm = () => {
    const { name, color, changeName, generateRandomColor } = useContext(LogContext);

    const colorHandler = (e) => {
        e.preventDefault();
        generateRandomColor();
    };

    return (
        <Form>
            <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                    type="text"
                    id="name"
                    aria-label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => changeName(e.target.value)}
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="Color">Color:</Label>
                <Color color={color}>{color}</Color>
                <Button onClick={(e) => colorHandler(e)}>Randomize!</Button>
            </FormGroup>
        </Form>
    );
};

export default NameForm;

const Form = styled.form`
    margin-bottom: 0.33rem;
`;

const FormGroup = styled.div`
    margin-bottom: 0.75rem;
`;

const Label = styled.label`
    font-size: 1.4rem;
    margin-right: 0.5rem;
`;

const Color = styled.span`
    font-size: 1.4rem;
    margin-right: 0.5rem;
    font-weight: 600;
    color: ${(props) => (props.color ? props.color : "black")};
    text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
    padding: 0.25rem;
    font-size: 1.3rem;
    font-family: Montserrat, sans-serif;
`;

const Input = styled.input`
    padding: 0.25rem 0.5rem;
    font-family: Montserrat, sans-serif;
    max-width: 15rem;
`;
