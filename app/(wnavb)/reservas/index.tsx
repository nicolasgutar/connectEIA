// File: app/%28wnavb%29/reservas/index.tsx

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { reservas } from '@/data/reservas';
import ReservaContainer from '@/components/ReservaContainer';

const Index = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {reservas.map((reserva, index) => (
                <ReservaContainer key={index} reserva={reserva} />
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