import { createStore } from "redux";

const reducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case "login":
            return { ...payload };
        case "logout":
            return {};
        default:
            return {};
    }
};

export default createStore(reducer);
