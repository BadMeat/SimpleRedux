import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../action'

class ListItems extends Component {
    constructor(props) {
        super(props)
    }

    printDetail() {
        if (this.props.isExpended) {
            return (
                <Text>{this.props.library.item.description}</Text>
            )
        }
    }

    render() {
        const { title, id } = this.props.library.item
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.props.selectLibrary(id)
                this.props.dataList(data)
            }
            }>
                <View>
                    <Text>{title}</Text>
                    {this.printDetail()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.library.item.id === state.selected
    console.log(state.selected)
    return { isExpended: expanded }
}

export default connect(mapStateToProps, actions)(ListItems)

const data = [
    {
        "id": 0,
        "title": "Webpack",
        "description": "Webpack is a module bundler. It packs CommonJs/AMD modules i. e. for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand."
    }
]
