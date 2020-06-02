import React from "react"
import SignInButton from "./SignInButton"
import { action } from "@storybook/addon-actions"
import { select, withKnobs } from "@storybook/addon-knobs"

export default {
    component: SignInButton,
    title: "src/SigInButton"
}

export const SignInButtonWithoutLoading = () => <SignInButton
    onClickSignIn={action('clicked')}
    token={false}
/>


export const SignInButtonWithLoading = () => <SignInButton
    size={select('size', ['small', 'medium', 'large'], 'large')}
    token={true}
/>

SignInButtonWithLoading.story={
    decorators:[withKnobs]
}