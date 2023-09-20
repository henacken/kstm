'use client'
//ライブ画面テンプレート
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import ChatLogSpace, { ChatItem } from '@/components/organisms/ChatLogSpace'
import MessageSend from '@/components/molecules/MessageSend'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { SessionProvider, getSession, useSession } from 'next-auth/react'

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
    getSession().then((v) => {
      socket.emit('join', { username: v?.user?.name || 'noname', roomId })
    })
    socket.on('connect', () => {
      setConnection(true)
    }),
      socket.on('message', (data) => {
        setChatLog((prev) => {
          return prev.map((v) => v).concat(data)
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
