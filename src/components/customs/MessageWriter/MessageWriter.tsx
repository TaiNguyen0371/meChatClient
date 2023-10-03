import IonIcon from '@reacticons/ionicons';
import { FormEvent, useState } from 'react';
import socket from '~/services/socket';
type MessageWriterProp = {
  className?: string;
};
const MessageWriter = ({ className }: MessageWriterProp) => {
  const [messageIpt, setMessageIpt] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit('message', { room: '65146a2f9485e8bafd784bd3', content: messageIpt, sender: 'taine' });
    setMessageIpt('');
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={`flex items-center gap-2 w-full h-10 ${className}`}>
      <input
        className="w-[99%] h-full rounded-full px-3 bg-transparent border-[2px] border-pr-green text-pr-light outline-none"
        type="text"
        value={messageIpt}
        onChange={(e) => setMessageIpt(e.target.value)}
        placeholder="Write message here"
      />
      <button className="flex items-center">
        <IonIcon className="text-2xl text-pr-green" name="send" />
      </button>
    </form>
  );
};

export default MessageWriter;
