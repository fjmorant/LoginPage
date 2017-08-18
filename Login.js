import React, {Component} from 'react'
import { View, Image, TextInput} from 'react-native'
import {action, observable} from 'mobx'
import {observer} from 'mobx-react'
import CheckBox from 'react-native-checkbox'


export class Logo extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center'}}> 
                <Image
                    resizeMode='contain'
                    style={{ width: null, height: null, flex: 0.7}}
                    source={{ uri: this.props.src}}
                />
            </View>
        )
    }
}

export class Inputs extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5}}
                    onChangeText={this.props.onChangeUsername}
                    value={this.props.username}
                />

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 5}}
                    onChangeText={this.props.onChangePassword}
                    value={this.props.password}
                />
            </View>
        )
    }
}

export class RememberMe extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CheckBox
                    label='Remember my details'
                    checked={this.props.isCheckedRememberme}
                    onChange={this.props.onRememberMeChanged}
                />
            </View>
        )
    }
}

@observer
export default class Login extends Component {
    
    @observable username = ''
    @observable password = ''
    @observable isCheckedRememberMe = false


    @action.bound
    onChangeUsername (username) {
        this.username = username
    }

    @action.bound
    onChangePassword (password) {
        this.password = password
    }

    @action.bound
    onRememberMeChanged() {
        this.isCheckedRememberMe = !this.isCheckedRememberMe
    }

    render() {
        const childrenWithProps = this.props.children.map((child) => {
            if (child === Inputs) {
                return React.cloneElement(child, {
                    onChangeUsername,
                    onChangePassword,
                    username: this.state.username,
                    password: this.state.password,
                })
            }

            if (child === RememberMe) {
                return React.cloneElement(child, {
                    onRememberMeChanged,
                    isCheckedRememberMe: this.state.isCheckedRememberMe,
                })
            }

            return child

        })

        return (
            <View style={{flex: 1, padding: 5}}>
                {childrenWithProps}
            </View>
        )
    }
} 