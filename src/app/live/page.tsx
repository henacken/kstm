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
  const [chatLog, setChatLog] = useState<CommnetItem[]>([
    {
      type: 'user',
      name: 'ogaog',
      comment:
        'コメントああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
    },
    {
      type: 'user',
      name: 'あああああああああああああああああああああああああああああああaa',
      comment: 'コメントあああeeああああああああああああああ',
    },
    {
      type: 'system',
      name: 'システムメッセージあああ',
      comment: 'あああああああああああああああああああああああああああああああ',
    },
    {
      type: 'user',
      name: 'あああああああaa',
      comment: 'コメントあああeeあaaaあああああああああああああ',
    },
    {
      type: 'user',
      name: 'ああaa',
      comment: 'コメントあああeeああああああああああああああ',
    },
  ])

  const [socket, _] = useState(() => io())
  //const router = useRouter();
  //const { roomId, username } = router.query;

  const roomId = 'hello'
  useEffect(() => {
    socket.on('connect', () => {
      console.log('socket connected')
      getSession().then((v) => {
        socket.emit('join', { username: v?.user?.name || 'noname', roomId })
      })
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
      <ChatLogSpace chatLog={chatLog} />
      <MessageSend onMessageSend={sendMessage} />
    </div>
  )
}
