import nodemailer from "nodemailer";
// Looking to send emails in production? Check out our Email API/SMTP product!
const  transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9434da1623fc7e",
      pass: "ce1416fb77c688"
    }
  });


type Options = { name : string ; to : string ; link : string } ;
 
const sendVerificationMail = async ( options : Options)=>{
    const{name , to , link} = options;
    if( process.env.NODE_ENV === 'development'){
       await  transport.sendMail({
            to ,
            from : process.env.VERIFICATION_MAIL_FROM,
            subject : "Verify your email",
            html : `<p>Dear ${name} ,</p><p>Click on the <a href="${link}">this link to verify your email</p>` ,
        })

    }
    else {
        // send email using email service
    }

}

const mail ={
            sendVerificationMail
}
export default mail;