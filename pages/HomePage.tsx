import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'
import ListContent from './ListContent'


import styles from '../styles/pages/HomePage.module.scss'

interface asd {
  listName: string,
  listPrivate: boolean,
  listPassword: string,
  listIdentification: string,
  listContent: [string]
}

const Home: NextPage = () => {
  const [userLists, setUserLists] = useState<asd[]>()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: session } = useSession()

  useEffect(() => {
    getSession().then(async (result) => {
      if (!result) {
        return null
      }

      const validateUser = await axios.get('/api/users', { //Validar se o usuário já existe para não ter dois usuários com o mesmo email
        params: { user: result.user?.email }
      })

      if (validateUser.data.status === 404) { //Se o usuário não existir, ele cria o usuário.
        axios.post('/api/users', {
          user: result.user
        })
      }

      const userListsInfo = await axios.get('/api/lists', {
        params: { user: result.user?.email }
      })
      setUserLists(userListsInfo.data.userLists)
      return null
    })


  }, [])

  return (
    <div className={styles.container}>
      {isModalVisible ? <ListContent onClose={() => setIsModalVisible(false)} /> : null}

      <strong>Estas são as suas listas:</strong>
      {userLists?.map((list, index) => {
        return (
          <>
            <button
              key={index}
              onClick={() => { setIsModalVisible(true) }}
            >
              {userLists[index].listName}
            </button>
          </>
        )
      })}
      {/* {Object.keys(userLists).map((list, index) => {
        return (
          <Link key={index} passHref href='/ListContent' listData={userLists[index]}>{userLists[index].listName}</Link>
        )
      })} */}


      <strong>Acesse uma lista:</strong>
      <input type="text" placeholder='insira o código da lista' />
      <Link href="/ListContent">
        <button>Acessar</button>
      </Link>

      <p>Caso não tenha nenhuma lista, <Link href='/CreateList'><strong>crie a sua lista aqui</strong></Link></p>
    </div >
  )
}

export default Home
