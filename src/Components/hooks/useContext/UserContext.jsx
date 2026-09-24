import { Children, createContext } from "react";

const UserContext = createContext()

export default UserContext


export const UserProvider = ({Children})=>{
    const user ={
        name:"viki",
        email:"viki@gmail.com"
    }
    return(
        <UserContext.Provider value={user}>
            {Children}
        </UserContext.Provider>
    )
}