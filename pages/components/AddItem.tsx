import styles from '../../styles/components/AddItem.module.scss'


type AddItemProps = {
  closeAddItemModal: () => void
}

export function AddItem({ closeAddItemModal }: AddItemProps) {



  return (
    <div className={styles.modalOverlay}>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <input type="text" placeholder='Qual item' />
          <input type="number" placeholder='Quantidade' />
        </div>
        <div className={styles.buttons}>
          <button>Adicionar item</button>
          <button onClick={closeAddItemModal}>Cancelar</button>
        </div>


      </div>

    </div>
  );
}