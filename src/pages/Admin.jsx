import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/Form";
import { Button, Input } from "../components";
import { useCallback } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 16px;
    height: 100vh;
`;

const ProdList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const AddProd = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const ProdWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

export default ({ prodList, setProdList }) => {
    const user = useSelector((state) => state).username;
    const myProductList = prodList.filter((item) => item.user === user);
    const addProd = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const id = prodList.length ? prodList[prodList.length - 1].id + 1 : 0;
        setProdList([...prodList, { id, title, content, user }]);
        e.target.title.value = null;
        e.target.content.value = null;
    };
    const delProd = useCallback((id) => {
        setProdList([...prodList.filter((item) => item.id !== id)]);
    });
    return (
        <Wrapper>
            <ProdList>
                {myProductList.map((item) => (
                    <ProdWrapper>
                        <Link to={`/product/${item.id}`}>{item.title}</Link>
                        <Button onClick={() => delProd(item.id)}>삭제</Button>
                    </ProdWrapper>
                ))}
            </ProdList>
            <AddProd onSubmit={addProd}>
                <Input placeholder={"상품명"} name={"title"} />
                <Input placeholder={"상품소개"} name={"content"} />
                <Button>등록하기</Button>
            </AddProd>
        </Wrapper>
    );
};
