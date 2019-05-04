import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {caixaAlta} from '../util'

const ItemListaPessoa = props => {
    const {pessoa} = props;
    const { title, first, last } = pessoa.name;
    return (
        <View style={styles.linhas}>
        <Image style={styles.avatar} source={{uri: pessoa.picture.medium}} />
            <Text style={styles.linhaTexto}>
                {`${caixaAlta(title)} ${caixaAlta(first)} ${caixaAlta(last)}`}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    linhas: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row'
    },
    linhaTexto: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
})

export default ItemListaPessoa;