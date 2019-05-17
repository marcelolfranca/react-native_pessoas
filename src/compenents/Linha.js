import React from 'React';
import { View, Text, StyleSheet } from 'react-native';

const Linha = ({ label, content }) => {
    return (
        <View style={styles.linha}>
            <Text style={[styles.cell,
            styles.label,
            label.length > 10 ? styles.longLabel : null]}>{label}
            </Text>
            <Text style={[styles.cell, styles.conteudo]}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cell: {
        fontSize: 15,
        paddingLeft: 5,
    },
    label: {
        paddingLeft: 5,
        fontWeight: 'bold',
        flex: 1
    },
    longLabel: {
        fontSize: 10
    },
    conteudo: {
        flex: 3
    }
});

export default Linha;