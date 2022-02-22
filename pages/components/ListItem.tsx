import { BiEditAlt, BiTrash, BiCheckCircle } from 'react-icons/bi'

import styles from '../../styles/pages/ListItem.module.scss';

type ItemListProps = {
  itemName: string,
  quanty: number
}

export function ListItem({ itemName, quanty }: ItemListProps) {
  return (
    <tr className={styles.tableRowItem}>
      <td className={styles.tableRowItemName} >{itemName}</td>
      <td><strong>{quanty}</strong></td>
      <td className={styles.tableRowItemAction}>
        <BiCheckCircle size={30} color='000' />
        <BiTrash size={30} color='000' />
        <BiEditAlt size={30} color='000' />
      </td>
    </tr>
  );
}