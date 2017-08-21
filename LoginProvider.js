import {inject, observer} from 'mobx-react'
import {action, observable} from 'mobx'

export default class LoginProvider {

    @observable username = ''
    @observable password = ''
    @observable isCheckedRememberMe = false
    @observable isLogging = false

    apiClient = null

    constructor(apiClient, Navigator) {
        this.apiClient = apiClient
        this.navigator = Navigator
    }


    @action.bound
    onChangeUsername(username) {
        this.username = username
    }

    @action.bound
    onChangePassword(password) {
        this.password = password
    }

    @action.bound
    onRememberMeChanged() {
        this.isCheckedRememberMe = !this.isCheckedRememberMe
    }

    @action.bound
    async onLoginPressed() {
        this.isLogging = true

        await this.apiClient.login()

        this.isLogging = false

        this.navigator.goBack()
    }
} 

