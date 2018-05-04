import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from './weatherApi';
const iconNames = {
 Clear: 'md-partly-sunny',
 Rain: 'md-rainy',
 Thunderstrom:'md-thunderstorm',
 Clouds:'md-cloudy',
 Snow:'md-snow',
 Drizzle:'md-umbrella'
}
export default class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state ={
      weather:'',
      temp:0
    }
  }
  /*setState(){
    this.state ={
      temp :0,
      weather :'Default'
    }
  }*/
  /*componentWillMount(){
    this.state ={
      temp:0,
      weather:'clear'
    }
  }*/
  componentDidMount(){
    this.getLocation()
    
  }
  getLocation(){
    navigator.geolocation.getCurrentPosition(
      (posData) => fetchWeather(posData.coords.latitude,posData.coords.longitude)
      .then(res => this.setState({
        temp:res.temp,
        weather:res.weather+''
      })),
      (error) => alert(error),
      {timeout:10000}
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        <View style = {styles.header}>
          <Icon name={iconNames[this.state.weather]} size={70} color={'white'}/>
          < Text style={styles.temp} >{this.state.temp} </Text>
        </View>
        < View style = {styles.body}>
         <Text style={styles.title}>My Weather App </Text>
         < Text style={styles.subtitle}>Let the rain come </Text>
        </View >
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd017',
   
  },
  header:{
    flex:1,
    //backgroundColor: '#1A384D',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    //fontSize:50,
    //flexDirection:'end',
  },
  logo:{
     fontSize:40,
     color:'white',
    // fontFamily:'HelveticaNeue-Bold',
  },
  temp:{
     fontSize: 50,
     color: 'white'
  },
  body:{
    flex:4,
    //backgroundColor: '#3792CE',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    margin: 10,
    //marginColor:'none',

  },
  title:{
    fontSize: 80,
    color: 'white',
    marginBottom:10,
  },
  subtitle:{
    fontSize: 30,
    color: 'white'
  }
});
