import { createContext, useState } from "react";

const userContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        id: null,
        name: null,
        email: null,
    });
    const [cart, setCart] = useState(null)

    return (
        <userContext.Provider value={{ user, setUser, cart, setCart }}>
            {children}
        </userContext.Provider>
    );
};

export default UserContext;
export { userContext };
