import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProductoContainer from '@/components/ProductoContainer';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const Index = () => {
    const [productos, setProductos] = useState([]);
    const apiUrl = Constants.expoConfig?.extra?.apiUrl;
    console.log("API URL: ", apiUrl);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                // Get the access token from secure storage
                const accessToken = await SecureStore.getItemAsync('accessToken');
                if (!accessToken || accessToken === 'undefined') {
                    console.error('No access token found or token is undefined');
                    return;
                }

                // Use axios for fetching products with Bearer token authorization
                const response = await axios.get(`${apiUrl}/api/product`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Response:', response);

                if (response.data && Array.isArray(response.data.data)) {
                    setProductos(response.data.data);
                    console.log('Productos:', response.data.data);
                } else {
                    console.error('Unexpected response format', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductos();
    }, [apiUrl]);

    return (
        <SafeAreaView style={styles.screen}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Marketplace</Text>
                <TouchableOpacity style={styles.searchButton} onPress={() => { /* Search logic */ }}>
                    <Ionicons name="search" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Product List */}
            <ScrollView contentContainerStyle={styles.productsContainer}>
                {productos.map((producto, index) => (
                    <ProductoContainer key={index} producto={producto} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#e0f7fa', // Light teal background for consistency
    },
    header: {
        backgroundColor: '#044a59',
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    searchButton: {
        padding: 5,
    },
    productsContainer: {
        paddingHorizontal: 15,
        marginTop: 20, // Add margin at the top
    },
});

export default Index;