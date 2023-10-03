// import Header from '~/layout/components/Header';
import SideBar from '~/layout/components/SideBar';
import { Outlet } from 'react-router-dom';
const DefaultLayout = () => {
  return (
    <div className="relative bg-pr-dark text-white min-h-screen">
      {/* <Header className="p-3 shadow-border-full shadow-pr-gray h-20" /> */}
      <div className="grid grid-cols-12 h-screen">
        <SideBar className={`col-span-2 p-3 h-full `} />
        <main
          className={`col-span-10 p-3 border-l-[1px] border-pr-green h-full
          `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
