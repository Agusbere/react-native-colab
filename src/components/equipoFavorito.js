import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UltimoPartido from './ultimoPartido';
import ProximoPartido from './proximoPartido';

export default function EquipoFavorito({ equipo }) {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>⭐ {equipo.nombre}</Text>
            <Text style={styles.subtitulo}>Último Partido</Text>
            <UltimoPartido partido={equipo.ultimo} />
            <Text style={styles.subtitulo}>Próximo Partido</Text>
            <ProximoPartido partido={equipo.proximo} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: { marginBottom: 16, padding: 12, backgroundColor: '#fff8e1', borderRadius: 10 },
    nombre: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
    subtitulo: { fontSize: 16, fontWeight: '600', marginVertical: 4 },
});
