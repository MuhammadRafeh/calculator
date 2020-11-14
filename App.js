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
  state = {
    currentValue: "0",
    operator: null,
    previousValue: null
  }

  handleOnPress = (type, value) => {
    this.setState(prevState => {
      if (type === 'number') {
        if (prevState.currentValue === '0') {
          return { currentValue: `${value}` };
        }
        return {
          currentValue: `${prevState.currentValue}${value}`,
        };
      }

      if (type === 'operator') {
        return {
          currentValue: 0,
          operator: value,
          previousValue: prevState.currentValue
        }
      }

       if (type === 'equal') {
        const { currentValue, previousValue, operator } = prevState;

        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);
        const resetState = {
          operator: null,
          previousValue: null,
        };

        if (operator === '/') {
          return {
            currentValue: previous / current,
            ...resetState,
          };
        }

        if (operator === '*') {
          return {
            currentValue: previous * current,
            ...resetState,
          };
        }

        if (operator === '+') {
          return {
            currentValue: previous + current,
            ...resetState,
          };
        }

        if (operator === '-') {
          return {
            currentValue: previous - current,
            ...resetState,
          };
        }
      }

      return prevState;
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView>
          <StatusBar barStyle="light-content"/>
          <Text style={styles.text}>{parseFloat(this.state.currentValue).toLocaleString()}</Text>
           <Row>
            <Button theme="secondary" text="C" onPress={() => alert('TODO')} />
            <Button theme="secondary" text="+/-" onPress={() => alert('TODO')} />
            <Button theme="secondary" text="%" onPress={() => alert('TODO')} />
            <Button theme="accent" text="/" onPress={() => this.handleOnPress('operator', '/')} />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleOnPress('number', 7)} />
            <Button text="8" onPress={() => this.handleOnPress('number', 8)} />
            <Button text="9" onPress={() => this.handleOnPress('number', 9)} />
            <Button theme="accent" text="x" onPress={() => this.handleOnPress('operator', '*')} />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleOnPress('number', 4)} />
            <Button text="5" onPress={() => this.handleOnPress('number', 5)} />
            <Button text="6" onPress={() => this.handleOnPress('number', 6)} />
            <Button theme="accent" text="-" onPress={() => this.handleOnPress('operator', '-')} />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleOnPress('number', 1)} />
            <Button text="2" onPress={() => this.handleOnPress('number', 2)} />
            <Button text="3" onPress={() => this.handleOnPress('number', 3)} />
            <Button theme="accent" text="+" onPress={() => this.handleOnPress('operator', '+')} />
          </Row>

          <Row>
            <Button text="0" size="double" onPress={() => this.handleOnPress('number', 0)} />
            <Button text="." onPress={() => this.handleOnPress('number', '.')} />
            <Button theme="accent" text="=" onPress={() => this.handleOnPress('equal')} />
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