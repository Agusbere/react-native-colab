import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TablaGoleadores() {
    const goleadores = [
        { jugador: 'Martínez', equipo: 'River', goles: 12 },
        { jugador: 'Rojas', equipo: 'Boca', goles: 10 },
        { jugador: 'López', equipo: 'Racing', goles: 9 },
    ];

    return (
        <View style={styles.tabla}>
            {goleadores.map((g, i) => (
                <Text key={i} style={styles.texto}>{i + 1}. {g.jugador} ({g.equipo}) - {g.goles} goles</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    tabla: { padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
    texto: { fontSize: 16, marginBottom: 4 },
});
