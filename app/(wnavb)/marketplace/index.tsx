// File: app/(wnavb)/marketplace/index.tsx
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { productos } from '@/data/productos';
import ProductoContainer from '@/components/ProductoContainer';

const Index = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {productos.map((producto, index) => (
                <ProductoContainer key={index} producto={producto} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default Index;