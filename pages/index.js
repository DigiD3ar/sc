import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { OneOffQrScanner } from 'react-webcam-qr-scanner.ts'

export default function Home() {

  const [qrCode, setQrCode] = React.useState('')
  const yey = (x) => console.log(x) 
  const qr_scn = () => {}


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button onClick={qr_scn}>cpture</button>
        <OneOffQrScanner
        onQrCode={setQrCode}
        hidden={false} /* optional: set true to hide the video-preview */
      />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
