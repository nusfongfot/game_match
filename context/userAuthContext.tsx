import { auth } from "@/firebase";
import { deleteCookie } from "cookies-next";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<{}>>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
};

const UserAuthContext = createContext<ContextType>({
  user: {},
  setUser: () => {},
  logIn: () => Promise.resolve({} as UserCredential),
  logOut: () => Promise.resolve(),
  signUp: () => Promise.resolve({} as UserCredential),
});

export default function UserAuthContextProvider({ children }: Props) {
  const [user, setUser] = useState({});

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    deleteCookie("tokenFirebase")
    window.location.replace("/");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser: any) => {
      // console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, logIn, signUp, logOut, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
