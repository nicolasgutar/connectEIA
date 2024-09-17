import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { eventos } from '@/data/eventos';
import EventoContainer from '@/components/EventoContainer';

const Index = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {eventos.map((evento, index) => (
                <EventoContainer key={index} evento={evento} />
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