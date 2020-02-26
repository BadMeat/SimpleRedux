import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect, Provider } from 'react-redux'
import reducers from '../reducers'
import { createStore } from 'redux'

class ResturantList extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text> textInComponent </Text>
                </View>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.libraries)
    return {
        dataList: state.libraries
    }
}

export default connect(mapStateToProps)(ResturantList)