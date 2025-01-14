  "use server"

import { connectDB } from "../lib/db";
import { createNewUser } from "../models/user";

import {z} from 'zod';
const newUserSchema = z.object ({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.string().email( 'Invalid email address'),
  password: z.string().min(8 , 'Password must be at least 8 characters long'),
})

 
 export const signUp = async(data : FormData) => {

 
   
    // const name = (data.get('name'));
    // const email = (data.get('email'));
    // const password  = (data.get('password'));

   const result = newUserSchema.safeParse({name :data.get('name'), email : data.get('email'), password : data.get('password') })
   if(! result.success) return  console.log (result.error.formErrors.fieldErrors)

    const {name, email, password} = result.data;
     await connectDB()


  const user = await createNewUser ({
  
    name, email, password, verifed: false, provider: "credentials"
    
  }) 

}