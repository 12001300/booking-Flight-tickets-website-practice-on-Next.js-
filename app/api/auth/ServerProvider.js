"use client"
import { SessionProvider, useSession } from "next-auth/react";
export  const SessionProviderFunction=({children})=>{
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}