//ライブ画面テンプレート
import React from 'react'
import ChatLogSpace, { ChatItem } from '@/components/organisms/ChatLogSpace'
import MessageSend from '@/components/molecules/MessageSend'

export default function archive() {
  const chatLog: ChatItem[] = [
    { type: 'user', name: 'ogaog', comment: 'コメントああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ' },
    { type: 'user', name: 'あああああああああああああああああああああああああああああああaa', comment: 'コメントあああeeああああああああああああああ' },
    { type: 'system', name: 'システムメッセージあああ', comment: 'あああああああああああああああああああああああああああああああ' },
    { type: 'user', name: 'あああああああaa', comment: 'コメントあああeeあaaaあああああああああああああ' },
    { type: 'user', name: 'ああaa', comment: 'コメントあああeeああああああああああああああ' }
  ]
  return (
    <div>
      <h1>live</h1>
      <ChatLogSpace chatLog={chatLog} />
      <MessageSend />
    </div>
  )
}
