import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UltimoPartido({ partido }) {
    return (
        <View style={styles.card}>
            <Text style={styles.texto}>{partido.local} {partido.resultado} {partido.visitante}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { padding: 10, backgroundColor: '#d9f9d9', borderRadius: 8, marginBottom: 6 },
    texto: { fontSize: 16 },
});
