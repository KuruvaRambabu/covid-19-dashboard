import React from 'react'
import InputField from './'
import strings from '../../i18n/strings.json'

export default {
    component: InputField,
    title: 'src/Authentication/InputField'
}

export const userNameField = () => (
    <InputField
        value=""
        onChangeField
        errorMessage={""}
        type={strings.userNameInputFieldType}
        placeholder={strings.userNamePlaceholderText}
    />
)

export const passwordField = () => (
    <InputField
        type={strings.passwordInputFieldType}
        placeholder={strings.passwordPlaceholderText}
        value='hi'
        onChangeField
        errorMessage={""}
    />
)
