import {FC} from 'react';
import AuthForm from '../components/AuthForm';
import { Input } from '@nextui-org/react';

interface Props {
}

const SignIn:   FC<Props> = () => {
  return (
    <AuthForm 
    footerItems={
        [
            {  label : "Create an account ", link : '/sign-up', linkText : 'Sign Up'},
            {  label : "forget password ", link : '/forget-password', linkText : ' Forget Password'},
        ]
    }

     btnLabel='Sign In'  title='Log In'>

            <Input  placeholder='ansar@gmail.com'  label='Email'  name='email'  type='email'  />
            <Input  placeholder='password'  label='Password'  name='password'  type='password'  />

    </AuthForm>
  );
};

export default SignIn;