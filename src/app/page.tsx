import Image from 'next/image'
import styles from './page.module.css'

// className={styles.main}は、'./page.module.css'ファイルの　.main{}でCSS適応させることができるstyles.exampleも同じ
export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.example}>Hello, kstm!!</h1>
    </main>
  )
}
