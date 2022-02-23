import type { NextPage } from 'next'
import Image from 'next/image'

import { signIn, } from 'next-auth/react'

import { FcGoogle } from 'react-icons/fc'

import styles from '../styles/pages/Login.module.scss'
import logoGoogleUrl from '../assets/btnGoogle.png'


const Home: NextPage = () => {

  async function handleLogin() {
    signIn('google', { callbackUrl: 'http://localhost:3000/HomePage' })
  }


  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.googleButton}>
        <button onClick={handleLogin}>
          <p>Entrar com Google</p>
          <FcGoogle size={20} />
        </button>
      </div>



    </div>
  )
}

export default Home

