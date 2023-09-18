//ランディングページ
import React from 'react'
import styles from './page.module.css'
import Icon from '@/components/atoms/Icon'

export default function archive() {
  return (
    <div>
      <div className={styles.page}>
        <Icon
          style={styles.heroLogo}
          src={'./images/kstm.png'}
          alt={'heroLogo'}
        />
        <h1>LT-platform</h1>
        <h1>↓ランディングページ予定</h1>
      </div>
    </div>
  )
}
