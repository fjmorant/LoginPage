import React, {Component} from 'react'
import {Logo, Inputs, RememberMe, LoginButton, Label, GridButtons, VerticalLayout} from './LoginViews'
import {View} from 'react-native'
import {observer, inject} from 'mobx-react'

export default class FilshillLoginPage extends Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Logo 
                    weight={1} 
                    src='https://facebook.github.io/react/img/logo_og.png' 
                />
                <Inputs 
                    usernameIcon='username.png'
                    passwordIcon='password.png'
                />
                <RememberMe />
                <LoginButton
                    backgroundColor='red'
                    rounded
                    textColor='white'
                    title='Login'
                />
                <Label text='Have a website account ?' />
                <VerticalLayout verticalAlign='bottom' weight={1}>
                    <GridButtons
                        color={'red'}
                        options={['Account Application', 'About us']}
                        onPressOption={(option) => alert(option)}
                    />
                </VerticalLayout>
            </View>
        )
    }
}