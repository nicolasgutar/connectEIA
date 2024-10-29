// File: components/MenuButton.tsx
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useRouter, Href } from 'expo-router'; // Import Href

interface MenuButtonProps {
    Title: string;
    Redirect: Href; // Use Href type
}

const MenuButton: React.FC<MenuButtonProps> = ({ Title, Redirect }) => {
    const router = useRouter(); // Initialize router
    const screenWidth = Dimensions.get('window').width;
    const buttonWidth = screenWidth * 0.5;

    return (
        <TouchableOpacity
            style={[styles.button, { width: buttonWidth, height: buttonWidth * 0.4 }]}
            onPress={() => router.push(Redirect)} // Use router.push
        >
            <Text style={styles.buttonText}>{Title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#044a59',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MenuButton;
