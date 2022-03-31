import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import { Text, View } from '../components/Themed';
import { set_jwt } from '../store/authSlice';

export default function ModalScreen() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(set_jwt(''));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Préférences Utilisateurs</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title={'Déconnexion'} onPress={() => logout() } />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
