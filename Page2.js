import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Page2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Página 2</Text>
        <Button title={'Ir a Página 1'} onPress={()=>this.props.navigation.navigate('Page1')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF00',
  },
  welcome: {
      fontSize: 30
  }
});
