import {FC} from 'react';
import AuthForm from '../components/AuthForm';
import { Input } from '@nextui-org/react';

interface Props {
}

const ForGetPassword:   FC<Props> = () => {
  return (
   <AuthForm 
        btnLabel='Request Rest Link'
        title='Forget Password '
        footerItems={
            [
                {
                    label : 'Sign Up',
                    link : "/sign-up",
                    linkText : 'Create an Account '


                },
                {
                    label : "Already have an Account ",
                    link : "/sign-in",
                    linkText : "Sign In"
                }
            ]
        }


   >
    <Input    name ="email" label="Email" placeholder="jhon@gmail.com" type="email" />

   </AuthForm>
  );
};

export default ForGetPassword;