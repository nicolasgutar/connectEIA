// components/ConfirmButton.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface MenuButtonProps {
    Title: string;
    Redirect: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ Title, Redirect }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
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
        marginVertical: 10,
        width: '100%',
        height: 50, // Adjust height as needed
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MenuButton;