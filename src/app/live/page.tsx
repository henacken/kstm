"use client"
//ライブ画面テンプレート
import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import ChatLogSpace, { ChatItem } from '@/components/organisms/ChatLogSpace'
import MessageSend from '@/components/molecules/MessageSend'
import { getSession } from 'next-auth/react';

export default function Live() {
  const [chatLog, setChatLog] = useState([]);

  const [socket, _] = useState(() => io());
  //const router = useRouter();
  //const { roomId, username } = router.query;
  const [messages, setMessages] = useState([]);

  const roomId = 'hello';

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

      });
  }, []);

  const buttonClick = () => {
    socket.emit("message", { message: "test!" });
  };

  const sendMessage = (content: string) => {
    socket.emit("message", { message: content })
  };

  return (
    <div>
      <h1>live</h1>
      <ChatLogSpace chatLog={chatLog} />
      <MessageSend />
    </div>
  )
}
