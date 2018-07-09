import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen.js';
import CalculatorAppScreen from './src/screens/demos/CalculatorApp/CalculatorAppScreen.js';

export default createStackNavigator({
  //Home: HomeScreen,
  CalculatorAppScreen: CalculatorAppScreen,
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
