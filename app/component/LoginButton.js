"use client"
import { signIn, useSession } from "next-auth/react"
export default function LoginButton() {
     const {data:session}=useSession()
     return (
         <button className="btn aurora-background-button" onClick={()=>{
             signIn("github",{callbackUrl:"/booking"})
            
             
             
  }}  style={{color:"#ffffff" , border:"solid white 1px"}}>Login with Github</button>
  
  )
}
