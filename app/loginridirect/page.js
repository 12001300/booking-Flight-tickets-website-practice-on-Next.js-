
"use client"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()
  return (
    <div style={{marginTop:"200px"}} className="content-wrapper text-center container  d-flex justify-content-center flex-column"   >
   <div >
    <h1  style={{color:"white", fontSize:"40px"}} > Sorry sir but you need to login first :</h1>

   </div>
   <div className="mt-5">
    
    
    <button className="btn aurora-background-button" onClick={()=>{
        router.push("/")
    }} style={{color:"#ffffff" , border:"solid white 1px"}}>Login in the Home page</button>
   </div>
   </div>
  )
}

