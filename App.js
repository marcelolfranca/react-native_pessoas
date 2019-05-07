import { createAppContainer, createStackNavigator } from 'react-navigation';
import PaginaPessoas from './src/pages/PaginaPessoas';
import PaginaDetalhePessoa from './src/pages/PaginaDetalhePessoa';
import { caixaAlta } from './src/util'

const AppNavigator = createStackNavigator({
  "Main": {
    screen: PaginaPessoas
  },
  "DetalhePessoa": {
    screen: PaginaDetalhePessoa,
    navigationOptions: (dados) => {
      // console.log(dados.navigation.state.params.pessoa.name.first)
      const nomePessoa = caixaAlta(dados.navigation.state.params.pessoa.name.first);
      return ({
        title: nomePessoa,
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        }
      });
    }
  }
},
  {
    defaultNavigationOptions: {
      title: 'Pessoas',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center'
      }
    }
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;