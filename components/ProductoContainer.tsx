// File: components/ProductoContainer.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Producto } from '@/data/productos';

interface ProductoContainerProps {
    producto: Producto;
}

const ProductoContainer: React.FC<ProductoContainerProps> = ({ producto }) => {
    const imageSource = { uri: producto.images[0] };

    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.title}>{producto.name}</Text>
            <Text style={styles.description}>{producto.description}</Text>
            <Text style={styles.price}>Price: ${producto.price}</Text>
            <Text style={styles.price}>Contacto: {producto.created_by.phone}</Text>
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
});

export default ProductoContainer;