import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner} from 'expo-barcode-scanner';


export default class Transaction extends React.Component{

  constructor() {

    super();
    this.state = {

      hasCameraPermission: null,
      scan: false,
      scandata: '',
      buttonState: 'normal',
      scanStudentID: '',
      scanBookID: ''

    }

  }

  getCameraPermission = async(ID) => {
  
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({

      //Status === "granted" is true when user has granted the permission
      //Status === "granted" is false when user has not granted the permission
      hasCameraPermission: status === 'granted',
      buttonState: ID,
      scan: false

    }) 

  }

  handleBarCodeScanned = async({type, data}) => {

    if (this.state.buttonState === 'bookID') {

      this.setState({

      scan: true,
      scanBookID: data,
      buttonState: 'normal'

      })

    }

    else if (this.state.buttonState === 'studentID'){

      this.setState({

      scan: true,
      scanStudentID: data,
      buttonState: 'normal'

      })

    }


  }

  render() {

    const cameraPermission = this.state.hasCameraPermission 
    const scan = this.state.scan
    const buttonState = this.state.buttonState

    if (buttonState !== 'normal' && cameraPermission === true) {

      return(

        <BarCodeScanner 
          onBarCodeScanned = {scan ? undefined : this.handleBarCodeScanned}
          style = {StyleSheet.absoluteFillObject}
        />

      )

    }

    else if (buttonState === 'normal') {

      return( 

      <View style = {{margin: 20, justifyContent: 'center', alignItems: 'center'}}>

        <Image style = {{width: 250, height: 150}} source = {require('../assets/book.jpg')} />

        <View style = {{flexDirection: "row"}}>

        <TextInput style = {styles.inputstyle} placeholder = "bookID" value = {this.state.scanBookID}/>
        <TouchableOpacity style = {styles.scanbutton} onPress = {() => {this.getCameraPermission('bookID')}}>

          <Text style = {styles.displaytext}>Scan</Text>

        </TouchableOpacity>

        </View>

        <View style = {{flexDirection: "row"}}>

        <TextInput style = {styles.inputstyle} placeholder = "studentID" value = {this.state.scanStudentID}/>
        <TouchableOpacity style = {styles.scanbutton} onPress = {() => {this.getCameraPermission('studentID')}}>

          <Text style = {styles.displaytext}>Scan</Text>

        </TouchableOpacity>

        </View>

      </View>
    )

    }

    

  }


}

const styles = StyleSheet.create({ 

  displaytext: {

    fontSize: 20,
    textDecorationLine: 'underline',
    marginTop: 0

  },

  scanbutton: {

    backgroundColor: 'green',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 5,
    borderLeftWidth: 2,
    marginTop: 10

  },

  inputstyle: {

    width: 200,
    height: 50,
    backgroundColor: 'pink',
    borderWidth: 5,
    marginTop: 10,
    borderRightWidth: 0

  }

}
)