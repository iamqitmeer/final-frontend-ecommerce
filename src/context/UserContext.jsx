import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

export const UserContex = createContext();

function UserContextProvider({ children }) {
  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsUser(user);
      } else {
        setIsUser(null);
      }
    });
  }, []);

  return (
    <UserContex.Provider value={{ isUser, setIsUser }}>
      {children}
    </UserContex.Provider>
  );
}

export default UserContextProvider;