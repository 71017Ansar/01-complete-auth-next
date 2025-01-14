"use client"
import {FC} from 'react';
import AuthForm from '../components/AuthForm';
import { Input } from '@nextui-org/react';
import { signUp } from '../actions/auth';
import { useFormState } from 'react-dom';

interface Props {
}

const SignUp:   FC<Props> = () => {

   const [state, action ] = useFormState(signUp,{})
  return (
    <AuthForm 
    title="Sign Up"
    btnLabel="Sign Up"

    action={action}

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
        <Input  errorMessage = {state.errors?.name?.join(",")} isInvalid ={state.errors?.name? true : false} label = "name" placeholder="name" type="text" name="name" />
        <Input errorMessage = {state.errors?.email?.join(",")} isInvalid ={state.errors?.email? true : false}  label ="Email" placeholder="Email" type="email" name="email" />
        <Input errorMessage = {state.errors?.password?.join(",")} isInvalid ={state.errors?.password? true : false}  label ="Password" placeholder="Password" type="password" name="password" />
        

    </AuthForm>
  );
};

export default SignUp;