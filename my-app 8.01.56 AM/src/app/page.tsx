import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <h1>Demo for Homomorphic Encryption</h1>
      <input
        type="file">
        </input>
      </div>
    </main>
  )
}
