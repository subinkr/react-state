import "./App.css";
import { Header } from "./layouts";
import { Routes, Route } from "react-router-dom";
import { Admin, Main, Product, Register } from "./pages";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
    const [userList, setUserList] = useState([]);
    const [prodList, setProdList] = useState([]);
    return (
        <div className="App">
            <Provider store={store}>
                <Header userList={userList} setUserList={setUserList} />
                <Routes>
                    <Route path="/" element={<Main prodList={prodList} />} />
                    <Route
                        path="/register"
                        element={
                            <Register
                                userList={userList}
                                setUserList={setUserList}
                            />
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <Admin
                                prodList={prodList}
                                setProdList={setProdList}
                            />
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={<Product prodList={prodList} />}
                    />
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
