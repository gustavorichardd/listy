import type { NextPage } from 'next'
import { ReactNode, useEffect, useState } from 'react'

import { ListItem } from './components/ListItem'
import { AddItem } from './components/AddItem'



import styles from '../styles/pages/ListContent.module.scss'

interface propsListContent {
  onClose: () => void,
}

const ListContent: NextPage<propsListContent> = ({ onClose }: propsListContent) => {
  const [addItemOptions, setSddItemOptions] = useState(false)

  const listaDeCompras = [
    {
      name: 'Arroz',
      quanty: 2,
    },
    {
      name: 'Feijão',
      quanty: 3,
    },
    {
      name: 'Carne para ensopar',
      quanty: 1,
    },
    {
      name: 'Leite',
      quanty: 5,
    },
    {
      name: 'Castanha',
      quanty: 15,
    },
    {
      name: 'Creme de leite nestlé',
      quanty: 3,
    },
  ]



  function handleAddNewItem() {
    setSddItemOptions(true)
  }

  return (
    <div className={styles.modalOverlay}>

      <div className={styles.container}>
        <button onClick={handleAddNewItem} className={styles.addNewItemButton} />
        <table>
          <tbody>
            {/* {listaDeCompras.map((item, index) => (
              <ListItem key={index} itemName={item.name} quanty={item.quanty} />

            ))} */}

            {addItemOptions ? <AddItem closeAddItemModal={() => setSddItemOptions(false)} /> : null}
          </tbody>
        </table>
        <button onClick={onClose} className={styles.closeButton} />
      </div>

    </div>
  )
}

export default ListContent
