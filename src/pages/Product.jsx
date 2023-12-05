import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100vh;
    flex-direction: column;
`;

export default ({ prodList }) => {
    const params = useParams();
    const id = parseInt(params.id);
    const product = prodList.find((item) => item.id === id);
    return (
        <Wrapper>
            <div>{product.title}</div>
            <div>{product.content}</div>
        </Wrapper>
    );
};
