import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import App from './App';
import Countries from './Countries';

const RootNavigator = DrawerNavigator({
  App: {
    screen: App,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Countries: {
    screen: Countries,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootNavigator;