import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DefaultLayout from '~/layout/DefaultLayout/DefaultLayout';
import Chat from '~/pages/Chat';
import SignIn from '~/pages/SignIn';
import NotFound from '~/pages/NotFound';
import { RootState } from '~/store';
const AppRoutes = () => {
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);
  console.log(isSignedIn);
  
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/chat" element={isSignedIn ? <Chat /> : <Navigate to={'/'} />}></Route>
        </Route>
        <Route path="/" element={isSignedIn ? <Navigate to={'/chat'} /> : <SignIn />}></Route>
        <Route path="*" element={<Navigate to="/NotFound-404" />} />
        <Route path="/NotFound-404" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
