import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      btn: 'VAI',
      last: null
    };

    //  Variable of the clock timer.
    this.timer = null;

    this.goTimer = this.goTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  goTimer() {
    if (this.timer != null) {
      // Here the timer will stop
      clearInterval(this.timer);
      this.timer = null;
      this.setState({btn: 'VAI'});
    }else{
      // Start the timer
      this.timer = setInterval(()=> {
        this.setState({ num: this.state.num + 0.1 })
      }, 100);
      this.setState({ btn: 'PARAR' });
    }
  }

  clearTimer() {
    if (this.timer != null) {
      // Here the timer will stop
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      num: 0,
      btn: 'VAI',
      last: this.state.num,
    })
  }

  render() {
    return (
      <View style={ styles.container }>

        <Image source={ require('./src/chronometer.png') } />

        <Text style={ styles.timer }>{ this.state.num.toFixed(1) }</Text>

        <View style={ styles.btnArea }>
          <TouchableOpacity style={ styles.btn } onPress={ this.goTimer }>
            <Text style={ styles.btnText }> { this.state.btn }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.btn } onPress={ this.clearTimer }>
            <Text style={ styles.btnText }>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={ styles.areaLast }>
          <Text style={ styles.raceText }>
            { this.state.last > 0 ? 'Último tempo: ' + this.state.last.toFixed(2) + 's' : '' }
          </Text>
        </View>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop:-160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaLast:{
    marginTop: 40,
  },
  raceText:{
    fontSize:25,
    fontStyle:'italic',
    color: '#FFF'
  }
});

export default App;
