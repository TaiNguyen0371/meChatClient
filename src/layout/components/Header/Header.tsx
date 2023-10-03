import { Link } from 'react-router-dom';
type HeaderProp = {
  className?: string;
};
const Header = ({ className }: HeaderProp) => {
  return (
    <div className={`flex item-center justify-between ${className}`}>
      <div className='flex items-center'>Logo</div>
      <Link to={'/login'} className='flex items-center'>Đăng nhập</Link>
    </div>
  );
};

export default Header;
