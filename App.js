import React from 'react';
import {
  View,
  Text, 
  StyleSheet, 
  SafeAreaView,
  StatusBar
  } from 'react-native';

import Row from './components/Row'
import Button from './components/Button'

class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBar barStyle="light-content"/>
          <Text style={styles.text}>78</Text>
           <Row>
            <Button theme="secondary" text="C" onPress={() => alert('TODO')} />
            <Button theme="secondary" text="+/-" onPress={() => alert('TODO')} />
            <Button theme="secondary" text="%" onPress={() => alert('TODO')} />
            <Button theme="accent" text="/" onPress={() => alert('TODO')} />
          </Row>

          <Row>
            <Button text="7" onPress={() => alert('TODO')} />
            <Button text="8" onPress={() => alert('TODO')} />
            <Button text="9" onPress={() => alert('TODO')} />
            <Button theme="accent" text="x" onPress={() => alert('TODO')} />
          </Row>

          <Row>
            <Button text="4" onPress={() => alert('TODO')} />
            <Button text="5" onPress={() => alert('TODO')} />
            <Button text="6" onPress={() => alert('TODO')} />
            <Button theme="accent" text="-" onPress={() => alert('TODO')} />
          </Row>

          <Row>
            <Button text="1" onPress={() => alert('TODO')} />
            <Button text="2" onPress={() => alert('TODO')} />
            <Button text="3" onPress={() => alert('TODO')} />
            <Button theme="accent" text="+" onPress={() => alert('TODO')} />
          </Row>

          <Row>
            <Button text="0" size="double" onPress={() => alert('TODO')} />
            <Button text="." onPress={() => alert('TODO')} />
            <Button theme="accent" text="=" onPress={() => alert('TODO')} />
          </Row>
        </SafeAreaView>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end'
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'right',
    marginRight: 20
  }
})