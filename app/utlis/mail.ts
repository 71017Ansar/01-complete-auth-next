type Options = { name : String ; to : String ; link : String } ;

const sendVerificationMail = async ( options : Options)=>{
    if( process.env.NODE_ENV === 'development'){

    }
    else {
        // send email using email service
    }

}

const mail ={
            sendVerificationMail
}
export default mail;