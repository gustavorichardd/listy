import type { AppProps } from 'next/app'
import { useState } from 'react'
import { SessionProvider, getSession } from 'next-auth/react'

import Home from '.'

import { Header } from './components/Header'
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {

  const [logged, setLogged] = useState(false)

  console.log(logged)

  getSession().then((result) => {
    result ? setLogged(true) : setLogged(false)
  })

  return (
    <SessionProvider session={session}>
      <Header />
      {logged ? <Component {...pageProps} /> : <Home />}
    </SessionProvider>
  )
}

export default MyApp
