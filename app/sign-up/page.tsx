import {FC} from 'react';
import AuthForm from '../components/AuthForm';
import { Input } from '@nextui-org/react';
import { signUp } from '../actions/auth';

interface Props {
}

const SignUp:   FC<Props> = () => {
  return (
    <AuthForm 
    title="Sign Up"
    btnLabel="Sign Up"

    action={signUp}

    footerItems={
        [
            {
                label : 'Already have an Account ',
                link : '/sign-in',
                linkText : 'Sign In',
            },
            {
                label : 'Forget Password ',
                link : '/forget-password',
                linkText : 'Forget Password',
            }
        ]
    }
    >
        <Input label = "name" placeholder="name" type="text" name="name" />
        <Input  label ="Email" placeholder="Email" type="email" name="email" />
        <Input  label ="Password" placeholder="Password" type="password" name="password" />
        

    </AuthForm>
  );
};

export default SignUp;