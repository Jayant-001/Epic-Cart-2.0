import { createContext, useState } from "react";

const userContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        id: null,
        name: null,
        email: null,
    });

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};

export default UserContext;
export { userContext };
