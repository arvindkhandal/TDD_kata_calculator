import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import Row from './Components/Row';
import Button from './Components/Button';

interface CalculatorState {
  currentValue: string;
  operator: string | null;
  previousValue: string | null;
}
export default class IndexApp extends Component<{}, CalculatorState> {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.value}>0</Text>
          <View>
            <Row>
              <Button text="C" theme="secondary" />
              <Button text="+/-" theme="secondary" />
              <Button text="%" theme="secondary" />
              <Button text="/" theme="accent" />
            </Row>
            <Row>
              <Button text="7" />
              <Button text="8" />
              <Button text="9" />
              <Button text="x" theme="accent" />
            </Row>
            <Row>
              <Button text="4" />
              <Button text="5" />
              <Button text="6" />
              <Button text="-" theme="accent" />
            </Row>
            <Row>
              <Button text="1" />
              <Button text="2" />
              <Button text="3" />
              <Button text="+" theme="accent" />
            </Row>
            <Row>
              <Button text="0" />
              <Button text="." />
              <Button text="=" theme="accent" />
            </Row>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  value: {
    color: 'black',
    fontSize: 40,
    textAlign: 'right',
    alignSelf: 'flex-end',
    width: '90%',
    height: 50,
    marginTop: '40%',
    marginRight: 20,
  },
});
