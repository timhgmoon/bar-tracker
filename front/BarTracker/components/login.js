import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/login';

export default function Login() {

    const [username, onChangeUsername] = React.useState('Username')
    const [password, onChangePassword] = React.useState('Password')
    return(
        <View style={styles.container}>
            <View style={styles.logincontainer} >
                
            <Text>Login Title</Text>
            <TextInput
                style={styles.textinput}
                selectTextOnFocus
                onChangeText={onChangeUsername}
                value={username}
            >
            </TextInput>
            <TextInput
                style={styles.textinput}
                selectTextOnFocus
                onChangeText={onChangePassword}
                value={password}
            >
            </TextInput>

            <Text style={styles.login}>
                Log In
            </Text>
            <View>
                <Text>Forgot username | password</Text>
            </View>
            </View>
        </View>
    )
}