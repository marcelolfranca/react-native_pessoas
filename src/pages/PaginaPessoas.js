import React from 'react';
import axios from 'axios';
import { View } from 'react-native';
import ListaPessoas from '../compenents/ListaPessoas'
// import console = require('console');

class PaginaPessoas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: []
        }
    }
    //Abaixo o método é chamado apenas quando o componente for montado, não todas as vezes que for renderizado
    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=br&results=5').
            then(response => {
                const { results } = response.data;
                this.setState({ pessoas: results })
            });
    }


    render() {
    
        return (
            <View style>
                <ListaPessoas
                    pessoas={this.state.pessoas}
                    onPressItem={() => {
                        // console.log('chegou aqui')
                        this.props.navigation.navigate('DetalhePessoa');
                    }
                }
                />
            </View>
        );
    }
}

export default PaginaPessoas;