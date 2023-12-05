import styled from "styled-components";

const Form = styled.form`
    display: flex;
    gap: 16px;
`;

export default ({ onSubmit, children }) => {
    return <Form onSubmit={onSubmit}>{children}</Form>;
};
