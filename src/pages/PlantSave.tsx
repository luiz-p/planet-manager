import React from 'react';
import {
    Alert, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { useRoute } from '@react-navigation/native';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
      times: number;
      repeat_every: string;
    };
  }
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params; 

  return(
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>{plant.name}</Text>

        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />

          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>

        <Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado:</Text>
        
        <Button title="Cadastrar planta" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: colors.shape,
  },
  plantName: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    marginTop: 10,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    textAlign: 'justify',
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.blue,
    marginLeft: 20,
  },
  alertLabel: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.complement,
    color: colors.heading,
    marginBottom: 5,
  },
});