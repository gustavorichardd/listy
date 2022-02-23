import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/pages/HomePage.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>


      <input type="text" placeholder='insira o código da lista' />
      <Link href="/ListContent">
        <button>Acessar</button>
      </Link>

      <p>Caso não tenha nenhuma lista, <Link href='/CreateList'><strong>crie a sua lista aqui</strong></Link></p>
    </div>
  )
}

export default Home
