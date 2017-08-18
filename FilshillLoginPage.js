import React, {Component} from 'react'
import Login, { Logo, Inputs, RememberMe} from './Login'
import {View} from 'react-native'

export default class FilshillLoginPage extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Login>
                    <Logo src='https://facebook.github.io/react/img/logo_og.png' />
                    <Inputs 
                        usernameIcon='username.png'
                        passwordIcon='password.png'
                    />
                    <RememberMe />
                    {/*
                    <LoginButton onLoginCompleted={() => alert('Login completed')} />
                    <Label text='Have a website account ?'/>
                    <BottomButtons
                        color={'red'}
                        options={['Account Application', 'About us']}
                        onPressOption={(option) => alert(option)}
                    />
                    */}

                </Login>
            </View>
        )
    }
}