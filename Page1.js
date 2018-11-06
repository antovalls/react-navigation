import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Page1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Página 1</Text>
        <Button title={'Ir a Página 2'} onPress={()=>this.props.navigation.navigate('Page2')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF00FF',
  },
  welcome: {
      fontSize: 30
  }
});
