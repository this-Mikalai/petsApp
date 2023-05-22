import React, { useContext, useState } from 'react'
import { Text } from 'react-native'
import Field from '../../components/Field/Field'
import Layout from '../../components/Layout/Layout'
import { ThemeContext } from '../../themeStyles/ThemeProvider'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {LOGO_TEXT} = useContext(ThemeContext);

  return (
    <Layout>
      <Text style={LOGO_TEXT}>Sign in</Text>
      <Field onChange={setEmail} value={email} placeholder={'email'}/>
      <Field onChange={setPassword} value={password} placeholder={'password'} isSecure={true}/>
    </Layout>
  )

}

export default LoginScreen