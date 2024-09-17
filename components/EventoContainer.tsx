// File: components/EventoContainer.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Evento } from '@/data/eventos';
import ConfirmButton from "@/components/ConfirmButton";

interface EventoContainerProps {
    evento: Evento;
}

const EventoContainer: React.FC<EventoContainerProps> = ({ evento }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: evento.Image_url }} style={styles.image} />
            <Text style={styles.title}>{evento.Description}</Text>
            <View style={styles.details}>
                <Text style={styles.subtitle}>{evento.Location}</Text>
                <Text style={styles.subtitle}>{evento.Hour}</Text>
                <Text style={styles.subtitle}>{evento.Date.toLocaleDateString()}</Text>
                <ConfirmButton Title={"Confirmar"} Redirect={""} />
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

export default EventoContainer;