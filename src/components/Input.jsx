import styled from "styled-components";

const Input = styled.input`
    width: 240px;
    height: 40px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
`;

export default ({ placeholder, type = "text", name }) => {
    return <Input placeholder={placeholder} type={type} name={name} />;
};
