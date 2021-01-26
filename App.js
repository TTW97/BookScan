import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppHeader from './components/AppHeader';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from './screens/Search';
import Transaction from './screens/Transaction';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: Transaction },
  Search: { screen: Search },
}, 
{
  defaultNavigationOptions: ({navigation}) => ({

    tabBarIcon: () => {

      const route = navigation.state.routeName
      if (route === 'Transaction') {

        return(

          <Image style = {{width: 30, height: 20}} source = {require('./assets/book.jpg')} />
        )

      }
      else if (route === 'Search'){

        return (

          <Image style = {{width: 30, height: 30}} source = {require('./assets/glass.jpg')} />
        )

      }

    }
  })
}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
