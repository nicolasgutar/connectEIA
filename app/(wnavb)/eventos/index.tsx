import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { eventos } from '@/data/eventos';
import EventoContainer from '@/components/EventoContainer';
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
    return (
        <SafeAreaView style={styles.screen}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Eventos</Text>
            </View>

            {/* Event List */}
            <ScrollView contentContainerStyle={styles.eventsContainer}>
                {eventos.map((evento, index) => (
                    <EventoContainer key={index} evento={evento} />
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
    eventsContainer: {
        paddingHorizontal: 15,
        marginTop: 20, // Add margin at the top
    },
});

export default Index;