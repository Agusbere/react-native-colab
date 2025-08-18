import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TablaPosiciones() {
    const posiciones = [
        { equipo: 'River Plate', puntos: 45 },
        { equipo: 'Boca Juniors', puntos: 42 },
        { equipo: 'Racing', puntos: 40 },
    ];

    return (
        <View style={styles.tabla}>
            {posiciones.map((p, i) => (
                <Text key={i} style={styles.texto}>{i + 1}. {p.equipo} - {p.puntos} pts</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    tabla: { padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
    texto: { fontSize: 16, marginBottom: 4 },
});
