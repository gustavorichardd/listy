import type { NextPage } from 'next'
import { ReactNode, useEffect } from 'react'

import { ListItem } from './components/ListItem'

import styles from '../styles/pages/ListContent.module.scss'

interface propsListContent {
  onClose: () => void
}

const ListContent: NextPage<propsListContent> = ({ onClose }: propsListContent) => {
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


  return (
    <div className={styles.modalOverlay}>

      <div className={styles.container}>
        <table>
          <tbody>
            {listaDeCompras.map((item, index) => (
              <ListItem key={index} itemName={item.name} quanty={item.quanty} />

            ))}
            <button onClick={onClose} className={styles.closeButton} />
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListContent
