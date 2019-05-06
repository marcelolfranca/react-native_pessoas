import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ItemListaPessoas from './ItemListaPessoas';

const ListaPessoas = props => {
    const { pessoas, onPressItem } = props;
    const nomesPessoas = pessoas.map(pessoa => {
        return <ItemListaPessoas key={pessoa.name.first} pessoa={pessoa} onPressItem={onPressItem} />
    });
    return <View style={styles.container}>{nomesPessoas}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default ListaPessoas;