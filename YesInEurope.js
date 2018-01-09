import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList, 
  Dimensions
} from 'react-native';
import { CalendarList} from 'react-native-calendars';

export default class YesInEurope extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markedDates: {}
		}
	}
	onDayPress(day) {
		const markedDates = Object.assign({}, this.state.markedDates)
	        markedDates[day.dateString]= {selected: true,  color: 'green'}
    		console.log(markedDates);
    		this.setState({
    			markedDates: markedDates
    		})
	}

	render() {
	const marked={}
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


		return (
			<View style={styles.container}>
			<CalendarList
  style={{
    borderWidth: 1,
    borderColor: 'gray'
  }}
     
  markingType={'period'}
  current={this.props.navigation.state.params.start}
  minDate={this.props.navigation.state.params.start}
  maxDate={this.props.navigation.state.params.today}
  futureScrollRange={6}
  onDayPress={(day) => {this.onDayPress(day)}}
markingType={'period'}
 monthFormat={'MMMM yyyy'}
 markedDates={this.state.markedDates}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
 
/>
			</View>
			)
	}
	
}