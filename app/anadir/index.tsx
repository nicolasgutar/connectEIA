import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    StatusBar,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const AnadirProducto = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isNew, setIsNew] = useState(false);
    const [isNegotiable, setIsNegotiable] = useState(false);
    const apiUrl = Constants.expoConfig?.extra?.apiUrl;
    const router = useRouter();

    const handleSubmit = async () => {
        if (!name || !description || !price || !imageUrl) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const newProduct = {
            name: name,
            description: description,
            price: parseFloat(price),
            new: isNew,
            negotiable: isNegotiable,
            images: [imageUrl],
        };

        try {
            // Get the access token from secure storage
            const accessToken = await SecureStore.getItemAsync('accessToken');
            if (!accessToken || accessToken === 'undefined') {
                console.error('No access token found or token is undefined');
                return;
            }

            // Send the product data to the backend API
            const response = await axios.post(`${apiUrl}/api/product`, newProduct, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                Alert.alert('Producto añadido', 'El producto ha sido añadido exitosamente');
                router.push('/'); // Navigate back to the home page or products page
            } else {
                console.error('Failed to add product:', response);
                Alert.alert('Error', 'Algo salió mal al añadir el producto');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            Alert.alert('Error', 'No se pudo añadir el producto. Por favor, intenta nuevamente.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Añadir Producto</Text>
                <View style={{ width: 28 }} />
            </View>

            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Input Fields */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="pricetag" size={20} color="#044a59" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            placeholderTextColor="#044a59"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="document-text" size={20} color="#044a59" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Descripción"
                            placeholderTextColor="#044a59"
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="cash" size={20} color="#044a59" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Precio"
                            placeholderTextColor="#044a59"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="image" size={20} color="#044a59" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="URL de la Imagen"
                            placeholderTextColor="#044a59"
                            value={imageUrl}
                            onChangeText={setImageUrl}
                        />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>¿Es nuevo?</Text>
                        <Switch
                            value={isNew}
                            onValueChange={(value) => setIsNew(value)}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isNew ? '#044a59' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>¿Es negociable?</Text>
                        <Switch
                            value={isNegotiable}
                            onValueChange={(value) => setIsNegotiable(value)}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isNegotiable ? '#044a59' : '#f4f3f4'}
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Añadir Producto</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa', // Light teal background for consistency
    },
    header: {
        backgroundColor: '#044a59',
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#044a59',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#044a59',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    switchLabel: {
        fontSize: 18,
        color: '#044a59',
    },
    submitButton: {
        backgroundColor: '#044a59',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AnadirProducto;
