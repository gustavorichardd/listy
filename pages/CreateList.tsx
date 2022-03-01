import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { AddItem } from './components/AddItem'
import generateRandomKey from '../utils/randomKey'

import styles from '../styles/pages/CreateList.module.scss'
import axios from 'axios'

const CreateList: NextPage = () => {
  const [listPrivate, setListPrivate] = useState(false)
  const router = useRouter();
  const [listName, setListName] = useState('')
  const [listPassword, setListPassword] = useState('')
  const [isAddItemModalVisible, setIsAddItemModalVisible] = useState(false)

  const { data: session, status } = useSession()


  async function handleSetListPrivate() {
    setListPrivate(!listPrivate)
  }

  async function handleCreateNewList() {
    if (listName.trim().length === 0) return null

    await axios.post('/api/lists', { listName, listPassword, listPrivate, session })

    router.push('/HomePage')
  }

  return (
    <div className={styles.container}>
      <label htmlFor='listName'>Insira o nome da sua lista</label>
      <input type="text" name='listName' id='listName' value={listName} onChange={e => setListName(e.target.value)} required />

      <div className={styles.CreatListPrivate}>
        <label className={styles.switch}  >
          <span className={styles.switchText}>Essa lista é privada?</span>

          <div className={styles.switchWrapper}>
            <input type="checkbox" name='listPrivate' onClick={handleSetListPrivate} />
            <span className={styles.switchButton}></span>
          </div>
        </label>



        {
          listPrivate
            ? (<div className={styles.secretPrivateList}>
              <label>Já que ela é privada, qual a senha a ser usada?</label>
              <input type="text" value={listPassword} onChange={e => setListPassword(e.target.value)} required />
            </div>)
            : null
        }
      </div>

      <div className={styles.listItens}>


        <button>+ item</button>
      </div>

      <button onClick={handleCreateNewList}>Criar LISTY</button>


    </div >
  )
}

export default CreateList
