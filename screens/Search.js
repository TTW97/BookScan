import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class Search extends React.Component{

  render() {

    return(


      <View style = {{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>

        <Image style = {{width: 100, height: 100}} source = {require('../assets/glass.jpg')} />

        <Text style = {{fontSize: 20}}>SEARCH</Text>

      </View>
    )



  }


}
