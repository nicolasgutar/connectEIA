import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

const Register = () => {
    const [cpassword, setCPassword] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('CPassword:', cpassword);
        console.log('Password:', password);
        console.log('Email:', email);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Register</Text>
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
                    placeholder="Confirm password"
                    placeholderTextColor="#888"
                    value={cpassword}
                    onChangeText={setCPassword}
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
    logo: {
        width: 90,
        height: 90,
        marginBottom: 20,
        resizeMode: 'contain',
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