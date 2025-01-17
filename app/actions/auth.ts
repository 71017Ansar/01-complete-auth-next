  "use server"

import { connectDB } from "../lib/db";
import { createNewUser } from "../models/user";
import crypto from 'crypto';
import {z} from 'zod';
import VerificationTokenModel from "../models/verificationToken";
import mail from '../utlis/mail';
const newUserSchema = z.object ({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.string().email( 'Invalid email address'),
  password: z.string().min(8 , 'Password must be at least 8 characters long'),
})

const handlerVerificationToken = async (
  user :({ id : string , email : string , name : string })
) => {
  const userId = user.id;
  const token = crypto.randomBytes(36).toString("hex")
  await connectDB();
  await VerificationTokenModel.findOneAndDelete({ userId });
  await VerificationTokenModel.create({ userId , token });
  const link =  ` ${ process.env.VERIFICATION_LINK }?token=${token}&&userid=${userId}`  
  await mail.sendVerificationMail( { to : user.email , name : user.name , link } );
 


}


interface AuthResponse {
  success ?: boolean;
  error ?: string;
  errors ?: Record < string , string[] | undefined>


}

 
 export const signUp = async(   state : AuthResponse ,data : FormData) : Promise<AuthResponse > => {

 
   
    // const name = (data.get('name'));
    // const email = (data.get('email'));
    // const password  = (data.get('password'));

   const result = newUserSchema.safeParse({name :data.get('name'), email : data.get('email'), password : data.get('password') })
   if (!result.success) return { success: false, errors: result.error.formErrors.fieldErrors };

    const {name, email, password} = result.data;
     await connectDB()


  const user = await createNewUser ({
  
    name, email, password, verifed: false, provider: "credentials"
    
  }) 

await handlerVerificationToken( { id : user._id , email  , name } );

  return {
    success: true, 
  }

}