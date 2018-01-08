import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList, 
  Dimensions
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class YesInEurope extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
		}
	console.log(this.props.navigation.state.params.start)	

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


		return (
			<View style={styles.container}>
			<CalendarList
  style={{
    borderWidth: 1,
    borderColor: 'gray'
  }}
  // Initially visible month. Default = Date()
  current={this.props.navigation.state.params.start}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={this.props.navigation.state.params.start}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={this.props.navigation.state.params.today}
  // Handler which gets executed on day press. Default = undefined
  futureScrollRange={6}
  onDayPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MMMM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
/>
			</View>
			)
	}
	
}