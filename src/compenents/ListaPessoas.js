import React from "react";
import { FlatList, Text, StyleSheet } from 'react-native';
import ItemListaPessoas from './ItemListaPessoas';

const ListaPessoas = props => {
    const { pessoas, onPressItem } = props;
    return <FlatList
        style={styles.container}
        data={pessoas}
        renderItem={({ item }) => (
            <ItemListaPessoas pessoa={item} onPressItem={onPressItem} />
        )}
        keyExtractor={(item => item.login.uuid)}
    />
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default ListaPessoas;