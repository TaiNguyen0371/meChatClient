type AvatarProp = {
  image: string;
  online?: boolean;
};
const Avatar = ({ image, online = false }: AvatarProp) => {
  return (
    <div className="relative w-10 h-10">
      <img className="rounded-full" src={image} alt="" />
      <div
        className={`absolute bottom-0 right-0 rounded-full w-3 h-3 ${online ? 'bg-light-green-600' : 'bg-gray-600'} `}
      ></div>
    </div>
  );
};

export default Avatar;
