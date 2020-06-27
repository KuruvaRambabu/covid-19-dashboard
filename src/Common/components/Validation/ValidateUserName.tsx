const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/


export function ValidateUserName(value){
    if(value==="" || undefined){
        return {
            errorMessage:"*Required",
            showErrorMessage:true
        }
    }
    else if(emailRegex.test(value)) {
        return{
            showErrorMessage:false,
            errorMessage:""
        }
    }
    else{
        return {
            errorMessage:"Invalid email",
            showErrorMessage:true
        }
    }
}

export function ValidatePassword(value){
    if(value==="" || undefined){
        return {
            errorMessage:"*Required",
            showErrorMessage:true
        }
    }
    else if (passw.test(value)) {
        return{
            showErrorMessage:false,
            errorMessage:""
        }
    }
    else{
        return {
            errorMessage:"Invalid password",
            showErrorMessage:true
        }
    }
}