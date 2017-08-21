import React, { Component } from 'react'
import { Logo, Inputs, Label, LoginButton, HorizontalLayout, RememberMe, TextButton, VerticalLayout, GridButtons } from './LoginViews'
import { View } from 'react-native'

export default class BlakemoreLoginPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Logo 
                    weight={1} 
                    src='https://facebook.github.io/react/img/logo_og.png' 
                />
                <Label text='If you have previously logged into one of our websites ....' />
                <Inputs
                    usernameIcon='username.png'
                    passwordIcon='password.png'
                />
                <LoginButton
                    backgroundColor='blue'
                    rounded
                    textColor='white'
                    title='Login'
                />
                <HorizontalLayout weight={0.5} verticalAlign='center'>
                    <RememberMe />
                    <TextButton title='Forgot password?' textColor={'blue'} onPressButton={() => alert('Forgot password pressed')} />
                </HorizontalLayout>
                
                <VerticalLayout verticalAlign='bottom'>
                    <GridButtons
                        color={'blue'}
                        options={['Activate', 'Register']}
                        onPressOption={(option) => alert(option)}
                    />
                </VerticalLayout>
            </View>
        )
    }
}