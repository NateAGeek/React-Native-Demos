import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default class LaunchDemoAppComponent extends React.Component {
	static defaultProps = {
		onPress: () => {},
		onLongPress: () => {},
		appIcon: require('../assets/images/no_icon.png'),
		demoName: 'Not Defined'
	};

	constructor(props) {
		super(props);

		this.state = {
			checked: false
		}
	}

	render() {
		return(
			<View style={{
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				maxWidth: 92,
				margin: 12
			}}>
				<TouchableOpacity
					onPress={this.props.onPress}
					onLongPress={this.props.onLongPress}>
					<Image 
						source={this.props.appIcon}
						style={{width: 64, height: 64}}/>
				</TouchableOpacity>
				<Text
					selectable={false}
					ellipsizeMode="tail"
					numberOfLines={1}
				 	style={{
						textAlign: 'left'
				}}>{this.props.demoName}</Text>
			</View>	
		);
	}
}
