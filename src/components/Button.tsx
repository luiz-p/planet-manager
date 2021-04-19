import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
    <Text style={styles.buttonText}>{ title }</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 56,
    height: 56,
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    borderRadius: 16,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 24,
    color: colors.white,
  }
})