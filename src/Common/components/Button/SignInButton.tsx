import React from 'react'

import { observer } from 'mobx-react'
import Loader from 'react-loader-spinner'
import { PrimarySignInButton } from './styledComponents'

type SignInButtonTypes = {
   onClickSignIn:any
   apiStatus:number
   name:string
   
}
@observer
class SignInButton extends React.Component <SignInButtonTypes> {
   render() {
      const { onClickSignIn, apiStatus,  name } = this.props

      return (
         <div>
            {apiStatus === 100 ? (
               <PrimarySignInButton
                  type='submit'
                  value='Submit'
                  onClick={onClickSignIn}
               >
                  <Loader type='TailSpin' color='#fff' height={30} width={30} />
               </PrimarySignInButton>
            ) : (
               <PrimarySignInButton
                  type='submit'
                  value='Submit'
                  onClick={onClickSignIn}
               >
                  {name}
               </PrimarySignInButton>
            )}
         </div>
      )
   }
}

export default SignInButton
