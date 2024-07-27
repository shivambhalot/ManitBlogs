/*we will need the user info in multiple contexts like navbar, write page, post page, 
so will store the user info in context. if we create a context provider and wrpa our application with this provider,
 we will be able to user user state anywhere in our application  */
import axios from "axios";
import { createContext, useEffect ,useState} from "react";

export const AuthContext= createContext()

//children represents all the components that we want to wrap with this context provider

export const AuthContextProvider =({children})=>{

    const [currentUser, setCurrentUser]=useState(JSON.parse(localStorage.getItem("user"))||null)

    const login =async(inputs)=>{
        const res= await axios.post("/auth/login",inputs);
        setCurrentUser(res.data);
    };
    const logout =async(inputs)=>{
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);
  return (
 <AuthContext.Provider value={{currentUser,login,logout}}>
    {children}
 </AuthContext.Provider>
  );
};
