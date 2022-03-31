import { Formik} from 'formik';
import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../services/api/auth';
import { set_jwt } from '../../../store/authSlice';

 const SignInSchema = Yup.object().shape({
   login: Yup.string()
     .email('Format d\'email invalide')
     .required('Saisir un identifiant'),
   password: Yup.string()
     .required('Saisir un mot de passe'),
 });


const LoginForm: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapperAvoidingView}
    >
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={values => {
          setLoading(true);
          login({
            username: values.login,
            password: values.password
          })
          .unwrap()
          .then(data => {
            setLoading(false);
            dispatch(set_jwt(data.access_token));
          }).catch((error) => {
            console.log(error);
            setLoading(false);
          })


        }}
        validationSchema={SignInSchema}
      >
        {({ submitForm, errors }) =>
        {
          if(errors.login || errors.password)
          {
            setLoading(false);
          }
          return (
          <>
            <LoginInput  />
            <PasswordInput />
            <Button onPress={() => submitForm()} title={'Connexion'} loading={loading} />
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
