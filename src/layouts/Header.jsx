import styled from "styled-components";
import { Button, Input } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    position: absolute;
    border: 1px solid black;
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export default ({ userList }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state).username;
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const findUser = userList.find(
            (item) => item.username === username && item.password === password
        );
        if (findUser) {
            dispatch({ type: "login", payload: { username, password } });
        } else {
            alert("로그인에 실패했습니다.");
        }

        navigate("/");
    };

    const logout = () => {
        dispatch({ type: "logout" });
    };

    return (
        <Wrapper>
            <Link to={"/"}>
                <Title>Shopping Mall</Title>
            </Link>
            <LoginWrapper>
                {user ? (
                    <div>{user}</div>
                ) : (
                    <Form onSubmit={loginSubmit}>
                        <Input
                            placeholder={"ID"}
                            type={"text"}
                            name={"username"}
                        />
                        <Input
                            placeholder={"Password"}
                            type={"password"}
                            name={"password"}
                        />
                        <Button type="submit">로그인</Button>
                    </Form>
                )}
                {user ? (
                    <>
                        <Link to={`/admin`}>
                            <Button>상품관리</Button>
                        </Link>
                        <Link to={"/"}>
                            <Button onClick={logout}>로그아웃</Button>
                        </Link>
                    </>
                ) : (
                    <Link to={"/register"}>
                        <Button>회원가입</Button>
                    </Link>
                )}
            </LoginWrapper>
        </Wrapper>
    );
};
