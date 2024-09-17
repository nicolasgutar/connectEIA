// File: components/ReservaContainer.tsx

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Reserva } from '@/data/reservas';
import ConfirmButton from "@/components/ConfirmButton";

interface ReservaContainerProps {
    reserva: Reserva;
}

const ReservaContainer: React.FC<ReservaContainerProps> = ({ reserva }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: reserva.Image_url }} style={styles.image} />
            <Text style={styles.title}>{reserva.Location}</Text>
            <View style={styles.details}>
                <Text style={styles.subtitle}>{reserva.Description}</Text>
                <ConfirmButton Title={"Confirmar"} Redirect={"/index"} />
            </View>
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
    details: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginBottom: 10,
        color: '#050505',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 5,
        color: '#000',
    },
});

export default ReservaContainer;