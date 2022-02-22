import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/pages/Home.module.scss'
import ListContent from './ListContent'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <h1>LISTY</h1>

      <input type="text" placeholder='insira o código da lista' />
      <Link href="/ListContent">
        <button>Acessar</button>
      </Link>

      <p>Caso não tenha nenhuma lista, <Link href='/CreateList'><strong>crie a sua lista aqui</strong></Link></p>
    </div>
  )
}

export default Home
