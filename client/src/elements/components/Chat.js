import styled from "styled-components";

export const Name = styled.span`
    font-weight: 600;
    color: ${(props) => (props.color ? props.color : "black")};
`;
