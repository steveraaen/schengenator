import React, { Component } from 'react';
import {
  AppRegistry,
  DrawerNavigator,
  StyleSheet,
  Text,
  View,
  FlatList, 
  Button,
  Dimensions
} from 'react-native';
import schengenCountries from './countryList.js'

export default class Countries extends Component {
  static navigationOptions = {
    drawerLabel: 'Schengen Countries',
  };
	constructor(props) {
		super(props);
		this.state={
			countries: schengenCountries
		}
	}
	componentWillMount() {
	var left = this.state.countries.slice(0, 13);
	var right = this.state.countries.slice(14, 26);
	this.setState({
		left: left,
		right: right
	})
	}
	render() {
	var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
	const styles = StyleSheet.create({
	  container: {
	  	flexDirection: "row",
	  	marginTop: 50,
	  	justifyContent: 'center',
	  	marginLeft: width * .03,
	  	marginRight: width * .03,
	  },
	  lines: {
		width: width, 
		height: height * .04, 
		alignSelf: 'stretch', 
		marginTop: 2,  
		paddingTop: 2,  
		backgroundColor: '#000099',
		color: "#FFCC00",
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
		
	  }
	}); 
		return(
			<View style={styles.container} >
				<FlatList 
					columns={2}
					data={this.state.countries}
					
					renderItem={({ item}) => 
					<View>
						<Text style={styles.lines} >{item}</Text>
					</View>}
					keyExtractor={item => item}

				 />
			</View>
			)
	}
}



