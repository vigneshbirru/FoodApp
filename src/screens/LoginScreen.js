import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        returnKeyType="next"
        style={styles.input}
        placeholder="Email"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
       label="Password"
        returnKeyType="done"
        style={styles.input}
        placeholder="Password"
        value={password.value}
        secureTextEntry
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
      />

      <TouchableOpacity style={styles.button} onPress={onLoginPressed}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    color: '#007bff',
    marginTop: 10,
  },
});
