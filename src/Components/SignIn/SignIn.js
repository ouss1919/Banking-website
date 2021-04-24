import React from 'react'
import { Form, FormButton, FormContent, FormH1, FormInput, FormWrap, FormLabel, Icon, SignInContainer, Text } from './SignInElements'


const SignIn = () => {
    return (
        <SignInContainer>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </SignInContainer>
    )
}

export default SignIn
