import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';

const Register = () => {
    const [name, setName] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Get the API URL from environment variables
    const apiUrl = Constants.expoConfig?.extra?.apiUrl;

    // Get the router instance to navigate programmatically
    const router = useRouter();

    const handleRegister = async () => {
        if (password !== cpassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            // Send registration data to backend API
            const response = await axios.post(`${apiUrl}/api/auth/register`, {
                name,
                phone,
                email,
                password,
            });

            if (response.status === 201) {
                const { accessToken, refreshToken } = response.data.data;

                // Store tokens securely as strings
                await SecureStore.setItemAsync('accessToken', String(accessToken), { keychainAccessible: SecureStore.WHEN_UNLOCKED });
                await SecureStore.setItemAsync('refreshToken', String(refreshToken), { keychainAccessible: SecureStore.WHEN_UNLOCKED });

                Alert.alert('Success', 'Registration successful');

                // Navigate to the Home screen using router from expo-router
                router.push('/');  // Assuming your Home screen is at the root path
            } else {
                Alert.alert('Error', 'Something went wrong');
            }
        } catch (error) {
            console.error('Registration Error:', error);
            Alert.alert('Error', 'Unable to register. Please try again later.');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Register</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#888"
                    value={name}
                    onChangeText={setName}
                />
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
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#888"
                    value={cpassword}
                    onChangeText={setCPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#888"
                    value={phone}
                    onChangeText={setPhone}
                />
                <Button title="Submit" onPress={handleRegister} />
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
});

export default Register;
