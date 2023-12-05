import styled from "styled-components";
import { Input } from "../components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100vh;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const Button = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
`;

export default ({ userList, setUserList }) => {
    const navigate = useNavigate();

    const registerSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const findUser = userList.find((item) => item.username === username);
        if (findUser) {
            alert("이미 존재하는 아이디입니다.");
        } else {
            setUserList([...userList, { username, password }]);
            alert("회원가입 되었습니다.");
            navigate("/");
        }
    };
    return (
        <Wrapper>
            <LoginForm onSubmit={registerSubmit}>
                <Input placeholder={"ID"} type={"text"} name={"username"} />
                <Input
                    placeholder={"Password"}
                    type={"password"}
                    name={"password"}
                />
                <Button type="submit">회원가입</Button>
            </LoginForm>
        </Wrapper>
    );
};
