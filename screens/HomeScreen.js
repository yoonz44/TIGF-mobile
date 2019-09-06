import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Alert, Button, TextInput } from 'react-native';

const onClickListener = (viewId) => {
    Alert.alert("Alert title", "Button pressed " + viewId);
};

function HomeScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DCDCDC',
        },
        inputContainer: {
            borderBottomColor: '#F5FCFF',
            backgroundColor: '#FFFFFF',
            borderRadius:30,
            borderBottomWidth: 1,
            width:250,
            height:45,
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center'
        },
        inputs:{
            height:45,
            marginLeft:16,
            borderBottomColor: '#FFFFFF',
            flex:1,
        },
        inputIcon:{
            width:30,
            height:30,
            marginLeft:15,
            justifyContent: 'center'
        },
        buttonContainer: {
            height:45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:20,
            width:250,
            borderRadius:30,
        },
        loginButton: {
            backgroundColor: "#00b5ec",
        },
        loginText: {
            color: 'white',
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/offices/50/000000/email.png'}}/>
                <TextInput style={styles.inputs}
                           placeholder="Email"
                           keyboardType="email-address"
                           underlineColorAndroid='transparent'
                           onChangeText={(email) => setEmail({email})}/>
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                           placeholder="Password"
                           secureTextEntry={true}
                           underlineColorAndroid='transparent'
                           onChangeText={(password) => setPassword({password})}/>
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => onClickListener('login')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <Touchable style={styles.buttonContainer} onPress={() => onClickListener('register')}>
                <Text>Register</Text>
            </Touchable>
        </View>
    );
}

export default HomeScreen;

HomeScreen.navigationOptions = {
    header: null,
};
