// File: components/MenuButton.tsx
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface MenuButtonProps {
    Title: string;
    Redirect: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ Title, Redirect }) => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const buttonWidth = screenWidth * 0.5;

    return (
        <TouchableOpacity
            style={[styles.button, { width: buttonWidth, height: buttonWidth * 0.4 }]}
            onPress={() => navigation.navigate(Redirect)}
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
        fontSize: 20, // Increased font size
        fontWeight: 'bold',
    },
});

export default MenuButton;