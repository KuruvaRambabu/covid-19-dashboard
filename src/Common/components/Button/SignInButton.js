import React from 'react'

import { observer } from 'mobx-react'
import Loader from 'react-loader-spinner'
import { PrimarySignInButton } from './styledComponents'

@observer
class SignInButton extends React.Component {
   render() {
      const { onClickSignIn, apiStatus, token, name, type } = this.props

      return (
         <div>
            {token ? (
               <PrimarySignInButton
                  type='submit'
                  value='Submit'
                  onClick={onClickSignIn}
                  apiStatus={apiStatus}
               >
                  <Loader type='TailSpin' color='#fff' height={30} width={30} />
               </PrimarySignInButton>
            ) : (
               <PrimarySignInButton
                  type='submit'
                  value='Submit'
                  onClick={onClickSignIn}
                  apiStatus={apiStatus}
               >
                  {name}
               </PrimarySignInButton>
            )}
         </div>
      )
   }
}

export default SignInButton
