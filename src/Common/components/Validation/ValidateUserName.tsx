const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

export function ValidateUserName(value) {
   if (value === '' || undefined) {
      return {
         errorMessage: '*Required'
      }
   } else if (emailRegex.test(value)) {
      return {
         errorMessage: ''
      }
   } else {
      return {
         errorMessage: 'Invalid email'
      }
   }
}

export function ValidatePassword(value) {
   if (value === '' || undefined) {
      return {
         errorMessage: '*Required'
      }
   } else if (passw.test(value)) {
      return {
         errorMessage: ''
      }
   } else {
      return {
         errorMessage: 'Invalid password'
      }
   }
}
