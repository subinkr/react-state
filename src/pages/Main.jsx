import { Link } from "react-router-dom";
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
    return (
        <Wrapper>
            {prodList.map((item) => (
                <Link to={`product/${item.id}`}>{item.title}</Link>
            ))}
        </Wrapper>
    );
};
