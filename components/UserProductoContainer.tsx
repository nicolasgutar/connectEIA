// File: components/UserProductoContainer.tsx
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Producto } from '@/data/productos';
import { Ionicons } from '@expo/vector-icons';

interface UserProductoContainerProps {
    producto: Producto;
    onDelete: () => void;
}

const UserProductoContainer: React.FC<UserProductoContainerProps> = ({ producto, onDelete }) => {
    const imageSource = { uri: producto.images[0] };

    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.title}>{producto.name}</Text>
            <Text style={styles.description}>{producto.description}</Text>
            <Text style={styles.price}>Price: ${producto.price}</Text>
            <Text style={styles.new}>New: {producto.new ? 'Yes' : 'No'}</Text>
            <Text style={styles.negotiable}>Negotiable: {producto.negotiable ? 'Yes' : 'No'}</Text>
            <Text style={styles.contact}>Contact: {producto.created_by.name} ({producto.created_by.phone})</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Ionicons name="trash" size={24} color="#ff0000" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginBottom: 17,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        marginBottom: 10,
        color: '#050505',
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginBottom: 5,
        color: '#000',
    },
    price: {
        marginBottom: 5,
        color: '#000',
    },
    new: {
        marginBottom: 5,
        color: '#000',
    },
    negotiable: {
        marginBottom: 5,
        color: '#000',
    },
    contact: {
        marginBottom: 5,
        color: '#000',
    },
    deleteButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});

export default UserProductoContainer;