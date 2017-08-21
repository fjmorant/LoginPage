import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native'
import FilshillLoginPage from './FilshillLoginPage'
import BlakemoreLoginPage from './BlakemoreLoginPage'
import BestwayLoginPage from './BestwayLoginPage'
import {StackNavigator} from 'react-navigation'
import {Provider} from 'mobx-react'
import LoginProvider from './LoginProvider'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})

const wait = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 3000)
    })
}

const apiClient = {
    login: async() => {
        await wait()
        alert('Success login')
    }
}

class SelectorScreen extends React.Component {
    static navigationOptions = {
        title: 'Select login',
    };
    render() {
        const {navigate} = this.props.navigation

        return (
            <View style={{flex: 1}}>
                <Button
                    onPress={() => navigate('Filshill')}
                    title='Filshill Login Page'
                    color='blue'
                />
                <Button
                    onPress={() => navigate('Bestway')}
                    title='Bestway Login Page'
                    color='blue'
                />
                <Button
                    onPress={() => navigate('Blakemore')}
                    title='Blakemore Login Page'
                    color='blue'
                />
            </View>
        )
    }
}

const App = StackNavigator({
    Selector: { screen: SelectorScreen },
    Filshill: { screen: FilshillLoginPage },
    Bestway: { screen: BestwayLoginPage },
    Blakemore: { screen: BlakemoreLoginPage },
});

const loginProvider = new LoginProvider(apiClient)

export default class AppProvider extends Component {
    render() {
        return (
            <Provider 
                apiClient={apiClient} 
                loginProvider={loginProvider}
            >
                <App />
            </Provider>
        )
    }
}
