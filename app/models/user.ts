import { Schema ,models, ObjectId, model } from "mongoose";
import { compareSync, genSaltSync, hashSync } from "bcrypt";





interface BaseUserDoc{
     _id? : ObjectId;
    name: string;
    email: string;
    provider : "credentials" | "google";
    password : string;
    avatar ? : {
        id? : string;
        url : string;
    };
    verifed : boolean ;

  }     


  export interface CredentialsUserDoc extends BaseUserDoc{
    
    provider : "credentials";
    password : string ;
   
  }
  export  interface GoogleUserDoc extends BaseUserDoc{
    
    provider : "google";
    password : never ;
   
  }

  export type UserDoc = CredentialsUserDoc | GoogleUserDoc;
  interface Method {
    compare : (password: string) => boolean;
  }

  const UserSchema = new Schema< BaseUserDoc ,{}, Method>({
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

  UserSchema.pre("save", function (){
    if(
      this.isModified("password") &&
      this.provider === "credentials" && 
      this.password
    ){
      const salt = genSaltSync(10);
      this.password = hashSync(this.password, salt);
    }
  })

    UserSchema.methods.compare = function (password: string){
      if(this.password){
        return compareSync(password, this.password);
      }else{
        return false;
      }
    }
   
  export const createNewUser  = async( userInfo : CredentialsUserDoc )=>{
    return await UserModel.create(userInfo);

  }

  const UserModel = models.User || model( "User" , UserSchema);
  export default UserModel;
   


