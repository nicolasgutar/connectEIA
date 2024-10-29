import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { reservas } from '@/data/reservas';
import ReservaContainer from '@/components/ReservaContainer';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
    return (
        <SafeAreaView style={styles.screen}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Reservas</Text>
            </View>

            {/* Reservations List */}
            <ScrollView contentContainerStyle={styles.reservationsContainer}>
                {reservas.map((reserva, index) => (
                    <ReservaContainer key={index} reserva={reserva} />
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
    addButton: {
        padding: 5,
    },
    reservationsContainer: {
        paddingHorizontal: 15,
        marginTop: 20, // Add margin at the top
    },
});

export default Index;