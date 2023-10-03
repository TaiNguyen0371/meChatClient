import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Avatar from '~/components/customs/Avatar';
import Button from '~/components/customs/Button';
import ChatCard from '~/components/customs/ChatCard';
import { RootState } from '~/store';
import { getChatList } from '~/services/chats';
import { useAxiosJWT } from '~/hooks/auth';

type SideBarProp = {
  className?: string;
};
const SideBar = ({ className }: SideBarProp) => {
  const axiosJWT = useAxiosJWT();
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  useEffect(() => {
    const chatList = getChatList(currentUser._id, currentUser.accessToken, axiosJWT);
  }, []);

  return (
    <div className={`flex flex-col justify-between ${className}`}>
      <div>
        <div className="text-center mb-5">
          <span className="font-semibold text-center text-3xl text-pr-light">me</span>
          <span className="font-extrabold text-4xl text-pr-green">Chat</span>
        </div>
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
      <div className={`flex ${isSignedIn ? 'justify-between' : 'justify-center'}`}>
        {isSignedIn ? (
          <>
            <div className="flex items-center gap-3">
              <Avatar
                online={true}
                image="https://marketplace.canva.com/EAFltFTo1p0/1/0/400w/canva-cute-anime-illustration-boy-avatar-FHrPI721fpQ.jpg"
              />
              <span>{currentUser && currentUser.fullname}</span>
            </div>
            <Button content="Sign out" />
          </>
        ) : (
          <Button content="Sign in" />
        )}
      </div>
    </div>
  );
};

export default SideBar;
