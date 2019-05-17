import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Linha from '../compenents/Linha'

export default class PaginaDetalhePessoa extends React.Component {
    render() {
        const { pessoa } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image source={{ uri: pessoa.picture.large }} style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <View style={styles.linha}>
                        <Linha label='Email:' content={pessoa.email} />
                        <Linha label='Cidade:' content={pessoa.location.city} />
                        <Linha label='Tel. fixo:' content={pessoa.phone} />
                        <Linha label='Celular:' content={pessoa.cell} />
                        <Linha label='Nacionalidade:' content={pessoa.nat} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,

    },
    avatar: {
        aspectRatio: 1,
    },

    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }
});