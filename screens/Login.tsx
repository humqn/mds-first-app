import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LoginForm from '../components/forms/login/LoginForm';

import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
     <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
});
