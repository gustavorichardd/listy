import { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/pages/CreateList.module.scss'

const CreateList: NextPage = () => {
  const [listPrivate, setListPrivate] = useState(false)

  async function handleSetListPrivate() {
    setListPrivate(!listPrivate)
  }

  async function handleCreateNewList() {

  }

  return (
    <div className={styles.container}>
      <h1>NOVA LISTY</h1>


      <label htmlFor='listName'>Insira o nome da sua lista</label>
      <input type="text" name='listName' id='listName' />

      <div className={styles.CreatListPrivate}>
        <label className={styles.switch}  >
          <span className={styles.switchText}>Essa lista é privada?</span>

          <div className={styles.switchWrapper}>
            <input type="checkbox" name='listPrivate' onClick={handleSetListPrivate} />
            <span className={styles.switchButton}></span>
          </div>
        </label>
      </div>

      <button onClick={handleCreateNewList}>Criar LISTY</button>


    </div >
  )
}

export default CreateList
