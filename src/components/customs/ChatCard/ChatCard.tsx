import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import { UserType } from '~/types';
type ChatCardProp = {
  className?: string;
  data?: UserType;
};
const ChatCard = ({ className, data }: ChatCardProp) => {
  return (
    <Link to={'/'} className={`flex items-center justify-between my-3 cursor-pointer h-[50px] ${className}`}>
      <div className="flex gap-3">
        <Avatar image="https://marketplace.canva.com/EAFltFTo1p0/1/0/400w/canva-cute-anime-illustration-boy-avatar-FHrPI721fpQ.jpg" />
        <div>
          <span>Robert</span> <br />
          <span className="text-sm text-pr-light_gray">Online 5 miniute ago</span>
        </div>
      </div>
      <IonIcon name="ellipsis-vertical" />
    </Link>
  );
};

export default ChatCard;
