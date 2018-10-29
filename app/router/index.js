import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import ModalScreen from '../screens/Modal';

export default MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
