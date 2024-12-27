import React from 'react';
import {StyleSheet, View} from 'react-native';

export default ({children}) => <View style={styles.row}>{children}</View>;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: -50,
  },
});
