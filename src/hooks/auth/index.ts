import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '~/store';
import { useState } from 'react';
import { authSignIn, refreshAccessToken } from '~/store/slices/auth';
import { FormLogin } from '~/types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const useSignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isFetching, setIsFetching] = useState(false);
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(false);
  const signIn = (data: FormLogin) => {
    setIsFetching(true);
    axios
      .post('http://localhost:5000/signin', data)
      .then((res) => {
        setIsFetching(false);
        console.log(res.data.result);
        dispatch(authSignIn(res.data.result));
      })
      .catch((err) => {
        setIsFetching(false);
        setError(true);
        setMsg(err.response.data.message);
      });
  };
  return [isFetching, error, signIn, msg];
};

const useAxiosJWT = () => {
  const dispatch = useDispatch<AppDispatch>();
  const axiosJWT = axios.create();
  const accessToken = useSelector((state: RootState) => state.auth.currentUser.accessToken);
  const refreshToken = useSelector((state: RootState) => state.auth.currentUser.refreshToken);
  axiosJWT.interceptors.request.use(
    async (config) => {
      const date = new Date();
      const decodedToken = jwt_decode(accessToken);
      if (decodedToken && decodedToken.exp < date.getTime() / 1000) {
        await axios
          .post('http://localhost:5000/refreshToken', { token: refreshToken })
          .then((res) => {
            console.log('New access Token: ' + res.data.accessToken);
            dispatch(refreshAccessToken(res.data.accessToken));
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return config;
    },
    (err) => Promise.reject(err),
  );
  return axiosJWT;
};

export { useSignIn, useAxiosJWT };
