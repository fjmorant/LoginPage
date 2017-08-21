import React, {Component} from 'react'
import {ActivityIndicator, View, Image, TextInput, TouchableOpacity, Text} from 'react-native'
import {action, observable} from 'mobx'
import {inject, observer} from 'mobx-react'
import CheckBox from 'react-native-checkbox'

export class Logo extends Component {
    render() {
        return (
            <View style={{ flex: this.props.weight || 1, justifyContent: 'center'}}> 
                <Image
                    resizeMode='contain'
                    style={{ width: null, height: null, flex: 0.7}}
                    source={{ uri: this.props.src}}
                />
            </View>
        )
    }
}

@inject('loginProvider')
export class Inputs extends Component {
    render() {
        const {loginProvider} = this.props

        return (
            <View style={{ padding: 5 }}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5}}
                    onChangeText={loginProvider.onChangeUsername}
                    value={loginProvider.non}
                />

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 5}}
                    onChangeText={this.props.loginProvider.onChangePassword}
                    value={loginProvider.non}
                />
            </View>
        )
    }
}

@inject('loginProvider')
export class RememberMe extends Component {
    render() {

        return (
            <View style={{padding: 5}}>
                <CheckBox
                    label='Remember my details'
                    checked={this.props.loginProvider.isCheckedRememberme}
                    onChange={this.props.loginProvider.onRememberMeChanged}
                />
            </View>
        )
    }
}

export class RoundedButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={this.props.onPress} 
                style={{borderRadius: 5, height: 40, backgroundColor: this.props.backgroundColor, justifyContent: 'center', alignItems: 'center', margin: 5}}
            >
               <Text style={{color: this.props.textColor}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export class TextButton extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}
            >
                <Text style={{ color: this.props.textColor }}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

@inject('loginProvider')
@observer

export class LoginButton extends Component {
    render() {
        const {loginProvider} = this.props

        if (this.props.rounded) {
            return loginProvider.isLogging ? <ActivityIndicator animating /> : <RoundedButton {...this.props} onPress={loginProvider.onLoginPressed}/>
        }

        return <TextButton {...this.props} />
    }
}

export class GridButtons extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', height: 40}}>
                {
                    this.props.options.map((option) => (
                        <TouchableOpacity onPress={() => this.props.onPressOption(option)} style={{flex: 1, borderColor: this.props.color, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ color: this.props.color }}>{option}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

export class VerticalLayout extends Component {
    render() {
        return (
            <View style={{flex: this.props.weight || null, justifyContent: this.props.verticalAlign === 'bottom' ? 'flex-end' : this.props.verticalAlign}}>
                {this.props.children}
            </View>
        )
    }
}

export class HorizontalLayout extends Component {
    render() {
        return (
            <View style={{ flex: this.props.weight || null, flexDirection: 'row', alignItems: this.props.verticalAlign}}>
                {this.props.children}
            </View>
        )
    }
}


export class Label extends Component {
    render() {
        return (
            <View style={{ padding: 5 }}>
                <Text style={{ color: this.props.textColor, textAlign: 'center'}}>{this.props.text}</Text>
            </View>
        )
    }
}
