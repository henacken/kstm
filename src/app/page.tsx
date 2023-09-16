import React from 'react'
import Header from '@/components/organisms/Header'

// kstmの画像が表示されないから修正必要
export default function Home() {
  return (
    <div>
      <Header logoSrc="./kstm.png" logoAlt="hero" />
      <h1>Hello, kstm!!</h1>
    </div>
  )
}
