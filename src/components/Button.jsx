import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
`;

export default ({ type, onClick, children }) => {
    return (
        <Button type={type} onClick={onClick}>
            {children}
        </Button>
    );
};
