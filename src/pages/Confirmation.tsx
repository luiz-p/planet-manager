import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas {'\n'}
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Começar" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    fontSize: 96,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 64,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    marginTop: 35,
    paddingHorizontal: 72,
  },
})