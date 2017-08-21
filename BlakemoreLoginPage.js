import React, { Component } from 'react'
import Login, { Logo, Inputs, Label, HorizontalLayout, TextButton, RememberMe, RoundedButton, LoginButton, VerticalLayout } from './LoginViews'
import {View, Button} from 'react-native'

export default class BlakemoreLoginPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Logo weight={1}  src='https://facebook.github.io/react/img/logo_og.png' />
                <Label text='Have a website account ?'/>
                <Inputs
                    usernameIcon='username.png'
                    passwordIcon='password.png'
                />
                <HorizontalLayout verticalAlign='center'>
                    <RememberMe />
                    <TextButton title='Forgot password?' textColor={'green'} onPressButton={() => alert('Forgot password pressed')}/>
                </HorizontalLayout>
                <LoginButton
                    backgroundColor='green'
                    rounded
                    textColor='white'
                    title='Login'
                />
                <VerticalLayout verticalAlign='center' weight={1}>
                    <RoundedButton
                        backgroundColor='green'
                        textColor='white'
                        onPressButton={() => alert('Login completed')}
                        title='Activate online account'
                    />
                    <RoundedButton
                        backgroundColor='green'
                        textColor='white'
                        onPressButton={() => alert('Login completed')}
                        title='Register as a customer'
                    />
                </VerticalLayout>
            </View>
        )
    }
}