'use client'
//ライブ画面テンプレート
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import ChatLogSpace, { ChatItem } from '@/components/organisms/ChatLogSpace'
import MessageSend from '@/components/molecules/MessageSend'
import { getSession } from 'next-auth/react'

interface CommnetItem {
  type: 'user' | 'system'
  name: string
  comment: string
}

export default function Live() {
  const [chatLog, setChatLog] = useState<CommnetItem[]>([])

  const [socket, _] = useState(() => io())
  const [connection, setConnection] = useState<boolean>(false)
  //const router = useRouter();
  //const { roomId, username } = router.query;

  const roomId = 'hello'

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join', {})
      console.log('socket connected')
      getSession().then((v) => {
        socket.emit('join', { username: v?.user?.name || 'noname', roomId })
      })
    }),
      socket.on('message', (data: any) => {
        console.log(data)
        setChatLog((prev: any) => {
          return prev.map((v: any) => v).concat(data)
        })
      })
  }, [])

  const sendMessage = async (content: string) => {
    socket.emit('message', {
      message: content,
      roomId,
      username: (await getSession())?.user?.name || 'noname',
    })
  }

  return (
    <div>
      <h1>live</h1>
      <p>{connection ? 'connected' : 'no connection'}</p>
      <ChatLogSpace chatLog={chatLog} />
      <MessageSend onMessageSend={sendMessage} />
    </div>
  )
}
