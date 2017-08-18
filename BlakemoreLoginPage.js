import React, { Component } from 'react'
import Login, { Logo, Inputs } from './Login'
import {View} from 'react-native'

export default class BlakemoreLoginPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Login>
                    <Logo src='https://facebook.github.io/react/img/logo_og.png' />
                    {/*<Label text='Have a website account ?' />*/}
                    <Inputs
                        usernameIcon='username.png'
                        passwordIcon='password.png'
                    />
                    {/*
                    <HorizontalLayout>
                        <RememberMe />
                        <ForgotPassword />
                    </HorizontalLayout>
                    <LoginButton onLoginCompleted={() => alert('Login completed')}/>
                    <ActivateButton />
                    <RegisterButton />
                    */
                    }
                </Login>
            </View>
        )
    }
}