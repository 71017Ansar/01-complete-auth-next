import { Schema ,models, ObjectId, model } from "mongoose";

import { Interface } from "readline";


Interface BaseUserDoc{
    _id: ObjectId;
    name: string;
    email: string;
    provider : "credentials" | "google";
    password : string;
    avatar ? : string {
        id? : string;
        url : string;
    };
    verifed : boolean ;

  }     


  export  Interface CredentialsUserDoc extends BaseUserDoc{
    
    provider : " credentials ";
    password : string ;
   
  }
  export  Interface CredentialsUserDoc extends BaseUserDoc{
    
    provider : "google ";
    password : never ;
   
  }

  export type UserDoc = CredentialsUserDoc | GoogleUserDoc;
  interface Method {
    compare : (password: string) => boolean;
  }

  const userSchema = new Schema< BaseUserDoc>({
    name : { type: String, trim : true, required: true  },
    email : { type: String, trim : true, required: true, unique : true },
    password : { type : String  },
    avatar : {
        typeof : Object , 
        id :  String ,
        url :String ,

    },
    provider : { type : String , enum : ["credentials" , "google"]  ,required : true },
    verifed : { type : Boolean , default : false },
  } ,{
    timestamps : true,
  })
   

  const UserModel = model( "User" , userSchema)
   


