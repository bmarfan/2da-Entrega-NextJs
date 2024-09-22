'use client'
import { useAuthContext } from "../context/AuthContext"

export default function Template({ children }) {

    const {user} = useAuthContext()
    
    if(user.logged){
        return(
            <div>Ya está loggeado</div>
        )
    } else {
        return <div>{children}</div>
    }

    
  }