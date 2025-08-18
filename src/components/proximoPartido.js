import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProximoPartido({ partido }) {
    return (
        <View style={styles.card}>
            <Text style={styles.texto}>{partido.local} 🆚 {partido.visitante}</Text>
            <Text style={styles.subTexto}>📅 {partido.fecha} ⏰ {partido.hora}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
    },
    texto: { fontSize: 18, fontWeight: 'bold' },
    subTexto: { fontSize: 14, color: 'gray' },
});
