import { Session } from "inspector"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { callbackify } from "util"

export const  authOptions ={
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        })
    ],
    session:{
        strategy:"jwt"
    },
    callbacks:{
        async jwt({token,account,profile})
        {
            if(account){
                token.id=profile.id
                token.name=profile.name
                token.username=profile.login
                token.avatar=profile.avatar_url
            }
            return token
        },
        async session ({session,token}) {
            session.user.id=token.id
            session.user.name=token.name
            session.user.username=token.username
            session.user.avatar=token.avatar
            return session
        }

    }
   
}
const handler =NextAuth(authOptions)
export {handler as GET , handler as POST}
