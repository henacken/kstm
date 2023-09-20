"use client"
//ライブ画面テンプレート
import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import ChatLogSpace, { ChatItem } from '@/components/organisms/ChatLogSpace'
import MessageSend from '@/components/molecules/MessageSend'

export default function Live() {
  const chatLog: ChatItem[] = [
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
  ]

  const [socket, _] = useState(() => io());
  //const router = useRouter();
  //const { roomId, username } = router.query;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("join", "hello");
    socket.on("connect", () => {
      console.log("socket connected");
      socket.emit("join", "hello");
    }),
      socket.on("message", (data) => {

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
