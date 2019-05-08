import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PaginaDetalhePessoa extends React.Component {
    render() {
        const { pessoa } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image source={{ uri: pessoa.picture.large }} style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <View style={styles.linha}>
                        <Text style={styles.cellCampo}>Email:</Text>
                        <Text style={styles.cellConteudo}>{pessoa.email}</Text>
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
    },
    linha: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cellCampo: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    cellConteudo: {
        fontSize: 15,
        paddingLeft: 5
    }
});