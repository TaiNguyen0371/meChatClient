import Avatar from '../Avatar';

type MessageContentProp = {
  className?: string;
  content: string;
  align: 'left' | 'right';
};
const MessageContent = ({ className, content, align }: MessageContentProp) => {
  return (
    <div className={`mt-3 flex gap-3 items-center ${align === 'right' && 'flex-row-reverse'}`}>
      {align === 'left' && <Avatar image='https://marketplace.canva.com/EAFltFTo1p0/1/0/400w/canva-cute-anime-illustration-boy-avatar-FHrPI721fpQ.jpg' />}
      <div
        className={`rounded-full bg-pr-light w-fit h-8 text-pr-dark font-semibold px-3 flex items-center`}
      >
        {content}
      </div>
    </div>
  );
};

export default MessageContent;
