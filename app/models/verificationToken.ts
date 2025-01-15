import { Schema ,models, ObjectId, model } from "mongoose";
import { compareSync, genSaltSync, hashSync } from "bcrypt";





interface VerificationTokenDoc{
    userId : string,
    expires : Date,
    token  : string  

  }     



  interface Method {
    compare : ( token: string) => boolean;
  }

  const UserSchema = new Schema< VerificationTokenDoc ,{}, Method>({
    userId: {   
        type: String,
        required: true
        },
        expires: {
            type: Date,
           default : Date.now(),
           expires : 60*60*24

            },
        token: {
            type: String,
            required: true
            }
  
  } )

  UserSchema.pre("save", function (){
    if(
      this.isModified(" token") 
    ){
      const salt = genSaltSync(10);
      this.token = hashSync(this.token, salt);
    }
  })

    UserSchema.methods.compare = function (token: string){
        return compareSync(token, this.token);
    }
   


  const VerificationTokenModel = models.VerificationToken || model( " VerificationToken" , UserSchema);
  export default VerificationTokenModel;
   


