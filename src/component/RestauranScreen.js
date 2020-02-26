import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import { createStore } from 'redux'
import { Button } from 'native-base'
import ResturantList from './ResturantList'

export default class RestauranScreen extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <ResturantList/>
                </View>
            </Provider>
        )
    }
}
