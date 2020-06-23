import React from 'react'
import SignInButton from './SignInButton'
import { action } from '@storybook/addon-actions'
import { select, withKnobs } from '@storybook/addon-knobs'

export default {
   component: SignInButton,
   title: 'src/SigInButton'
}

export const SignInButtonWithoutLoading = () => (
   <SignInButton
    apiStatus={200}  name ="button"
   onClickSignIn={action('clicked')} />
)

// export const SignInButtonWithLoading = () => (
//    <SignInButton
//    />
// )

// SignInButtonWithLoading.story = {
//    decorators: [withKnobs]
// }
