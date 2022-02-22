import type { NextPage } from 'next'
import styles from '../styles/pages/Home.module.scss'

import { ListItem } from './components/ListItem'



const ListContent: NextPage = () => {
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
    <div className={styles.container}>
      <h1>LISTY</h1>
      <table>
        <tbody>

          {listaDeCompras.map((item, index) => (
            <ListItem key={index} itemName={item.name} quanty={item.quanty} />

          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ListContent
