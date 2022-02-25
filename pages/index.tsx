import type { NextPage } from 'next'
import { signIn, } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import styles from '../styles/pages/Login.module.scss'

const Home: NextPage = () => {

  async function handleLogin() {
    await signIn('google', { callbackUrl: 'http://localhost:3000/HomePage' })
  }

  return (
    <div className={styles.container}>
      <p>Seja bem vindo ao <strong>LISTY</strong>! Um organizador para as suas listas!</p>
      <p>Primeiro, você precisa acessar o sistema:</p>


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

