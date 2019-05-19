import React from 'react';
import axios from 'axios';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import ListaPessoas from '../compenents/ListaPessoas'
// import console = require('console');

class PaginaPessoas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: [],
            loading: true,
            error: false
        }
    }
    //Abaixo o método é chamado apenas quando o componente for montado, não todas as vezes que for renderizado
    componentDidMount() {
        this.setState({ loading: true })
        axios.get('https://randomuser.me/api/?nat=br&results=25').
            then(response => {
                const { results } = response.data;
                this.setState({ pessoas: results, loading: false })
            }).catch(error => {
                this.setState({
                    loading:false,
                    error: true});
            });
    }


    render() {

        return (
            <View style={styles.container}>
                {this.state.loading ?
                    <ActivityIndicator size="large" color="#6ca2f7" />
                    : this.state.error ?
                    <Text style={styles.error}>Ops. Deu alguma coisa errada...</Text>
                    : <ListaPessoas
                        pessoas={this.state.pessoas}
                            onPressItem={parametros => {
                                this.props.navigation.navigate('DetalhePessoa', parametros);
                            }
                        }/>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 18
    }
})

export default PaginaPessoas;