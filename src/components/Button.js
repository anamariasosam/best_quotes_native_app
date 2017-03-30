import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>
      { children }
    </Text>
  </TouchableOpacity>
);


const primaryColor = '#262626';
const styles = StyleSheet.create({
  button: {
   flex: 1,
   alignSelf: 'stretch',
   backgroundColor: 'white',
   borderRadius: 5,
   borderWidth: 1,
   borderColor: primaryColor,
   marginLeft: 5,
   marginRight: 5,
 },
 buttonText: {
   alignSelf: 'center',
   color: primaryColor,
   fontSize: 16,
   fontWeight: '600',
   paddingTop: 10,
   paddingBottom: 10,
 },

});

export default Button;
