import React, { PureComponent } from 'react';
import {NetInfo, KeyboardAvoidingView, Platform} from 'react-native'
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';

import Main from './screens/main'
import Test from './screens/test'

export default class App extends PureComponent {

    render() {
        const scenes = Actions.create(
            <Scene key="root">
                <Scene key="main" component={Main} hideNavBar />
                <Scene key="test" component={Test} hideNavBar />
            </Scene>
        )

        return (
            <KeyboardAvoidingView
                behavior= {(Platform.OS === 'ios')? "padding" : null}
                style={{flex: 1}}>
                <Router hideNavBar scenes={scenes} />
            </KeyboardAvoidingView>
            
        );
    }
}