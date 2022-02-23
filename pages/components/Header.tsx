import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { BiHomeAlt } from 'react-icons/bi'
import { signOut, getSession } from 'next-auth/react'

import styles from '../../styles/pages/Header.module.scss'

export function Header() {
  const [hideHomeButton, setHideHomeButton] = useState(true)

  getSession().then((result) => {
    result ? setHideHomeButton(true) : setHideHomeButton(false)
  })

  function handleNavigateToHome() {
    signOut({ callbackUrl: 'http://localhost:3000/' })
  }

  return (
    <header className={styles.container}>
      <h1>LISTY</h1>
      {
        hideHomeButton
          ? (
            <button onClick={handleNavigateToHome}>
              <BiHomeAlt size={30} color='#000' />
            </button>
          )
          : null
      }
    </header>
  );
}