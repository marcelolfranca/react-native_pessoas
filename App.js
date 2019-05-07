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
      // ATENÇÃO
      // POR MOTIVOS DO CURSO ESTAR DESATUALIZADO, ABAIXO UMA GAMBIARRA PARA CONSEGUIR ATRIBUIR O VALOR DA VARIÁVEL
      const dadosParaString = JSON.stringify(dados);
      const dadosJson = JSON.parse(dadosParaString);
      const dadosPessoa = dadosJson.navigation.state.params.pessoa
      // console.log('dados stringify=>>>>>>>>>>>>', dadosPessoa);
      const nomePessoa = caixaAlta(dadosPessoa.name.first);
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