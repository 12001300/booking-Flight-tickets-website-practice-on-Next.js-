"use client"
import { signOut, useSession } from "next-auth/react"
export default function LogoutButton() {
     const {data:session}=useSession()
     return (
         <button className="btn aurora-background-button" onClick={()=>{
             signOut()
             
             
             
  }}  style={{color:"#ffffff" , border:"solid white 1px", width:"200px"}}>Logout </button>
  
  )
}
