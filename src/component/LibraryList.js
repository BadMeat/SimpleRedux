import React, { Component } from 'react'
import { Text, View, FlatList, ListView } from 'react-native'
import { connect } from 'react-redux'
import { List, ListItem } from 'native-base'
import * as actions from '../action'
import ListItems from './ListItems'

class LibraryList extends Component {

    keyExtractor = (item, index) => index.toString()

    renderItem(library) {
        return <ListItems library={library} />
    }

    render() {
        return (
            <FlatList
                data={this.props.dataToShow}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id.toString()}
            />
            // <List
            //     keyExtractor={this.keyExtractor}
            //     dataArray={this.props.dataToShow}
            //     renderRow={
            //         item => (
            //             <ListItem itemDivider
            //                 onPress={() => this.props.selectLibrary(item.id)}
            //             >
            //                 <Text>{item.title}</Text>
            //                 {
            //                     this.renderDeskripsi()
            //                 }
            //             </ListItem>)
            //     }>
            // </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataToShow: state.libraries
    }
}

export default connect(mapStateToProps, actions)(LibraryList)
