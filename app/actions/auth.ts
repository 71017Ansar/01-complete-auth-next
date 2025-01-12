  "use server"
 
 export const signUp = async(data : FormData) => {
   
    console.log(data.get('name'));
    console.log(data.get('email'));
    console.log(data.get('password'));

}