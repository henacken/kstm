//ライブ画面テンプレート
import React from 'react'
import ChatLogSpace from '@/components/organisms/ChatLogSpace'
import MessageSend from '@/components/molecules/MessageSend'

export default function archive() {
  return (
    <div>
      <h1>live</h1>
      <ChatLogSpace ChatLog="ここにチャットのデータを入れる？" />
      <MessageSend />
    </div>
  )
}
