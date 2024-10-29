import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProductoContainer from '@/components/ProductoContainer'; // Assuming this component displays a product
import UserProductoContainer from '@/components/UserProductoContainer'; // For icons
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const Index = () => {
    const [userName, setUserName] = useState('');
    const [userProducts, setUserProducts] = useState([]);
    const apiUrl = Constants.expoConfig?.extra?.apiUrl;
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get the access token from secure storage
                const accessToken = await SecureStore.getItemAsync('accessToken');
                if (!accessToken || accessToken === 'undefined') {
                    console.error('No access token found or token is undefined');
                    return;
                }

                // Fetch user data with Bearer token authorization
                const userResponse = await axios.get(`${apiUrl}/api/user`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (userResponse.status === 200) {
                    setUserName(userResponse.data.data.name);
                } else {
                    console.error('Failed to fetch user data:', userResponse);
                }

                // Fetch user's products
                const productResponse = await axios.get(`${apiUrl}/api/product/my-products`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (productResponse.status === 200 && Array.isArray(productResponse.data.data)) {
                    setUserProducts(productResponse.data.data);
                } else {
                    console.error('Failed to fetch user products:', productResponse);
                }
            } catch (error) {
                console.error('Error fetching user data or products:', error);
            }
        };

        fetchUserData();
    }, [apiUrl]);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.greeting}>Hola, {userName}!</Text>
                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name="person-circle" size={32} color="#fff" />
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Tus Productos</Text>

            <ScrollView contentContainerStyle={styles.productsContainer}>
                {userProducts.map((producto, index) => (
                    <UserProductoContainer key={index} producto={producto} />
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.addButton} onPress={() => router.push('/anadir')}>
                <Ionicons name="add-circle" size={56} color="#044a59" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#e0f7fa',
    },
    header: {
        backgroundColor: '#044a59',
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileButton: {
        padding: 5,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#044a59',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    productsContainer: {
        paddingHorizontal: 15,
        paddingBottom: 100, // To avoid overlap with the add button
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#fff',
        borderRadius: 28,
        elevation: 5,
    },
});

export default Index;
