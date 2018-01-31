import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment'
import Countries from './Countries.js'
import YesInEurope from './YesInEurope.js'

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        yesStartDateText: moment().subtract(180, 'days').format("MMMM Do YYYY"),
        yesStartDateDigit: moment().subtract(180, 'days').format("YYYY-MM-DD"),
        todaysDate: moment().format("YYYY-MM-DD"),
        modalVisible: false,
      }
      this.getStarted = this.getStarted.bind(this)
    }
    openModal() {
      this.setState({modalVisible:true});
    }

    closeModal() {
      this.setState({modalVisible:false});
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

          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                       <Text style={styles.welcome}>
                          Non-Europeans are permitted to spend 90 days out of any 180 days in the "Schengen Zone".
                          For frequent, or long term travelers, Schengenator determines and tracks your eligibility
                          based on the location of your device. 
                      </Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Go Back"
                >
                </Button>
              </View>
            </View>
          </Modal>
        <View style={styles.imageBar}>
       <Image  source={require('./assets/ns20x3.png')} />
       <Text style={styles.title} >Schengenator</Text>
          <TouchableOpacity onPress={() => this.openModal()} >        
        <Text style={{paddingTop: 6}}>  <Icon name="add" name="ios-information-circle" size={30} color="white"/></Text>       
          </TouchableOpacity>
          </View>

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
    backgroundColor: '#F5FCFF',
    marginLeft: width * .05,
    marginRight: width * .05
  },

  imageBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
   height: 80,
   backgroundColor: '#123293',
   marginTop: 20,
   paddingTop: 10,
   paddingRight: 5,
   paddingLeft: 20,
   width: width * .9,
 
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    lineHeight: 30
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
export const schengenator = StackNavigator({
  App: { screen: App },
  Countries: { screen: Countries },
  YesInEurope: {screen: YesInEurope}
});

AppRegistry.registerComponent('schengenator', () => schengenator);
