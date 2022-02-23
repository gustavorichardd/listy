import NextAuth from "next-auth"
import facebookProvider from 'next-auth/providers/facebook'
import googleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
    // facebookProvider({

    // })
    // ...add more providers here
  ],
})

