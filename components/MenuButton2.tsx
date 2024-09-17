// File: components/MenuButton2.tsx
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface MenuButton2Props {
    Title: string;
    Redirect: string;
}

const MenuButton2: React.FC<MenuButton2Props> = ({ Title, Redirect }) => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const buttonWidth = screenWidth * 0.5; // Wider width for horizontal cylinder
    const buttonHeight = buttonWidth * 0.2; // Smaller height for horizontal cylinder

    return (
        <TouchableOpacity
            style={[styles.button, { width: buttonWidth, height: buttonHeight }]}
            onPress={() => navigation.navigate(Redirect)}
        >
            <Text style={styles.buttonText}>{Title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 50, // Half of the height to make it a cylinder
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        color: '#044a59',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MenuButton2;