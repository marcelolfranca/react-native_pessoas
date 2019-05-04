import { createAppContainer, createStackNavigator } from 'react-navigation';
import PaginaPessoas from './src/pages/PaginaPessoas';

const AppNavigator = createStackNavigator({
  "Main": {
    screen: PaginaPessoas
  }
},
  {
    defaultNavigationOptions: {
      title: 'Pessoas',
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