import { Formik} from 'formik';
import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';
import * as Yup from "yup";

 const SignInSchema = Yup.object().shape({
   login: Yup.string()
     .email('Format d\'email invalide')
     .required('Saisir un identifiant'),
   password: Yup.string()
     .required('Saisir un mot de passe'),
 });


const LoginForm: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapperAvoidingView}
    >
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={values => {
          setIsLoading(true);
        }}
        validationSchema={SignInSchema}
      >
        {({ submitForm, errors }) =>
        {
          if(errors.login || errors.password)
          {
            setIsLoading(false);
          }
          return (
          <>
            <LoginInput  />
            <PasswordInput />
            <Button onPress={() => submitForm()} title={'Connexion'} loading={isLoading} />
          </>)
        }
        }
      </Formik>
    </KeyboardAvoidingView>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  wrapperAvoidingView: {
    flex: 1,
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    justifyContent: "center",
  }
})
