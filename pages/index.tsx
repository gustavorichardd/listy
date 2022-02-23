import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

import styles from '../styles/pages/Login.module.scss'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter();

  // console.log(session?.user)

  // useEffect(() => {
  //   if (session?.user) 
  // }, [])

  async function handleLogin() {
    signIn('google', { callbackUrl: 'http://localhost:3000/HomePage' })
  }

  // if (session?.user) {
  //   return (
  //     <>
  //       {

  //         /* <p>signed in as {data?.user}</p> <br /> */
  //       }
  //       <p>{session.user.name}</p>
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }

  return (
    <div className={styles.container}>


      <h1>Login</h1>
      {/* <Link href='/HomePage'>Logar com e-mail</Link> */}
      <button onClick={handleLogin}>Sign in</button>
    </div>
  )
}

export default Home
