import { useEffect, useState } from 'react';
import socket from '~/services/socket';
import { MessageType } from '~/types';
import ChatCard from '~/components/customs/ChatCard';
import MessageContent from '~/components/customs/MessageContent';
import MessageWriter from '~/components/customs/MessageWriter';
const Chat = () => {
  socket.connect();
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    socket.emit('room', '65146a2f9485e8bafd784bd3');
    socket.on('message', (data) => {
      setMessage(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="h-full flex flex-col justify-between">
      <ChatCard className="border-b-[1px] border-pr-green" />
      <div className="h-[calc(100%-90px)] overflow-y-scroll scroll-smooth no-scrollbar">
        {messages.map((msg: MessageType, index: number) => (
          <MessageContent key={index} content={msg.content} align="left" />
        ))}
      </div>
      <MessageWriter />
    </div>
  );
};

export default Chat;
