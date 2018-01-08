import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import moment from 'moment'
import Countries from './Countries.js'
import YesInEurope from './YesInEurope.js'

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        yesStartDateText: moment().subtract(180, 'days').format("MMMM Do YYYY"),
        yesStartDateDigit: moment().subtract(180, 'days').format("YYYY-MM-DD"),
        todaysDate: moment().format("YYYY-MM-DD")
      }
      this.getStarted = this.getStarted.bind(this)
    }
    componentWillMount() {
      console.log()
    }
    getStarted() {
      console.log("get started pressed")
    }
    render() {
      const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Non-Europeans are permitted to spend 90 days out of any 180 days in the "Schengen Zone".
          For frequent, or long term travelers, Schengenator determines and tracks your eligibility
          based on the location of your device. 
        </Text>
        <Text style={styles.welcome}>
          To begin, have you been to Europe since {this.state.yesStartDateText} ?
        </Text>
        <Button
          onPress={() => navigate('YesInEurope', {start: this.state.yesStartDateDigit, today: this.state.todaysDate})}
          title="Yes"
          color="#000099"
          accessibilityLabel="Learn more about this purple button"
/>
        <Button
          onPress={this.getStarted}
          title="No"
          color="#000099"
          accessibilityLabel="Learn more about this purple button"
/>
        <Button
          onPress={() => navigate('Countries')}
          title="Show me the list of Schengen countries"
          color="#000099"
          accessibilityLabel="Learn more about this purple button"
/>
   
      </View>
    );
  }
}
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginLeft: width * .05,
    marginRight: width * .05
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    lineHeight: 30
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export const schengenator = StackNavigator({
  App: { screen: App },
  Countries: { screen: Countries },
  YesInEurope: {screen: YesInEurope}
});

AppRegistry.registerComponent('schengenator', () => schengenator);
