import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

 
export const { handlers : { GET, POST }, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials ({
        credentials:    {
            email:{
                type: "email",
                label: "Email",
                placeholder: "Email",
            },
            password: {
                type: "password",
                label: "Password",
                placeholder: "******",
            }
        },
        async authorize(credentials) {
            const { email, password } = credentials;
            if (email === "alimuhammmadansar" && password === "123456") {
                return {
                    id: "1",
                    name: "Alim Umar",
                    email: "alim.umar@gmail.com",
                };
            }
            return null;
        }
        
    })
  ],
})