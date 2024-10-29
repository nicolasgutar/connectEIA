import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Get the API URL from environment variables
    const apiUrl = Constants.expoConfig?.extra?.apiUrl;

    // Get the router instance to navigate programmatically
    const router = useRouter();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }

        try {
            // Send login data to backend API
            const response = await axios.post(`${apiUrl}/api/auth/login`, {
                email,
                password,
            });

            if (response.status === 201) {
                const { accesToken, refreshToken } = response.data.data;
                console.log("response.data.data: ", response.data.data);
                // Store tokens securely as strings
                console.log('Access Token:', accesToken);
                await SecureStore.setItemAsync('accessToken', String(accesToken), { keychainAccessible: SecureStore.WHEN_UNLOCKED });
                await SecureStore.setItemAsync('refreshToken', String(refreshToken), { keychainAccessible: SecureStore.WHEN_UNLOCKED });

                Alert.alert('Success', 'Login successful');

                // Navigate to the Home screen using router from expo-router
                router.push('/');  // Assuming your Home screen is at the root path
            } else {
                Alert.alert('Error', 'Invalid credentials, please try again');
            }
        } catch (error) {
            console.error('Login Error:', error);
            Alert.alert('Error', 'Unable to login. Please try again later.');
        }
    };

    const handleRegisterRedirect = () => {
        router.push('/register'); // Navigate to the registration page
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Submit" onPress={handleLogin} />
                <TouchableOpacity onPress={handleRegisterRedirect}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 20,
    },
    registerText: {
        marginTop: 20,
        color: '#1E90FF',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default Login;
