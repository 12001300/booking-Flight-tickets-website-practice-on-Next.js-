"use client"
import Image from "next/image";
import{ Box, Container} from "@mui/material"
import LoginButton from "./component/LoginButton"
import LogoutButton from "./component/LogoutButton"
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session , status}=useSession()
 
  return (
   

    <div style={{marginTop:"200px"}} className="content-wrapper text-center container  d-flex justify-content-center flex-column"   >
   <div >
    <h1  style={{color:"white", fontSize:"40px"}} > Welcome to Flight Connect your way to comfort</h1>

   </div>
   <div className="mt-5">
    <p  style={{color:"white"}}>To be able to book a flight you need to be loged in </p>
    
    <LoginButton/>
   </div>
   
    </div>
    
  );
}
