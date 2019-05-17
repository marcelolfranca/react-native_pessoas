import React from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';
import ItemListaPessoas from './ItemListaPessoas';

const ListaPessoas = props => {
    const { pessoas, onPressItem } = props;
    const nomesPessoas = pessoas.map(pessoa => {
        return <ItemListaPessoas key={pessoa.name.first} pessoa={pessoa} onPressItem={onPressItem} />
    });
    return <ScrollView style={styles.container}>{nomesPessoas}</ScrollView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default ListaPessoas;