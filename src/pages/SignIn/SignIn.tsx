import { Formik, Form } from 'formik';
import { FormLogin } from '~/types';
import * as yup from 'yup';
import FormikInput from '~/components/customs/FormikInput';
import Button from '~/components/customs/Button';
import { Link } from 'react-router-dom';
import { useSignIn } from '~/hooks/auth';
const SignIn = () => {
  const [isFetching, error, signIn] = useSignIn();
  console.log(isFetching);
  console.log(error);

  const initialValues = {
    username: '',
    password: '',
  };
  const schema = yup.object().shape({
    username: yup.string().required('Username is a required field').min(6, 'Username must be at least 6 characters'),
    password: yup.string().required('Password is a required field').min(6, 'Password must be at least 6 characters'),
  });
  const handleLogin = async (values: FormLogin) => {
    signIn(values);
  };
  return (
    <div
      className={`w-screen h-screen grid place-items-center bg-[url('~/assets/images/login-background.jpg')] bg-no-repeat bg-center bg-cover`}
    >
      <div className="w-[25%] h-[500px]">
        <div className="text-center mb-10">
          <span className="font-semibold text-center text-5xl text-pr-light">me</span>
          <span className="font-extrabold text-6xl text-pr-green">Chat</span>
        </div>
        <div className="w-full p-3 min-h-[300px] bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] rounded-2xl">
          <h1 className="font-bold text-3xl text-center text-white">SignIn</h1>
          <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => handleLogin(values)}>
            <Form className="text-center">
              <FormikInput name="username" />
              <FormikInput name="password" type="password" />
              <Button className="text-white bg-pr-green" type="submit" content="Submit" />
            </Form>
          </Formik>
          <span className="text-white">
            Don't have account?{' '}
            <Link className="text-pr-green" to={'/signup'}>
              Sign up.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
