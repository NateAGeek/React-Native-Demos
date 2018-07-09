import {action} from './src/actions/store.js'

export const DemoAppsConfig = [
	{
		appIcon: require('./src/assets/images/calc_icon.png'),
		demoName: 'Calculator',
    onPress: function() {
      this.props.navigation.navigate('CalculatorAppScreen');
      //action('LAUNCH_DEMO_APP_CALCULATOR')
    },
    key: 'calculator_demo_app'
	},
];