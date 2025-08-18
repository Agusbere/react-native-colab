import React from 'react';
import { ScrollView, Text, StyleSheet, Button, View } from 'react-native';
import EquipoFavorito from '../components/equipoFavorito';

export default function FavoritosScreen({ navigation }) {
    const equiposFavoritos = [
        {
            id: 1,
            nombre: 'Independiente',
            ultimo: { local: 'Independiente', visitante: 'Lanús', resultado: '2-1' },
            proximo: { local: 'Independiente', visitante: 'Banfield', fecha: '22/08', hora: '21:00' },
        },
        {
            id: 2,
            nombre: 'Vélez',
            ultimo: { local: 'Huracán', visitante: 'Vélez', resultado: '0-0' },
            proximo: { local: 'Vélez', visitante: 'Argentinos', fecha: '23/08', hora: '17:00' },
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>⭐ Equipos Favoritos</Text>
            {equiposFavoritos.map((eq) => (
                <EquipoFavorito key={eq.id} equipo={eq} />
            ))}

            <View style={styles.botones}>
                <Button title="Ir a Partidos" onPress={() => navigation.navigate('Partidos')} />
                <Button title="Ir a Tablas" onPress={() => navigation.navigate('Tablas')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
    botones: { marginTop: 20, gap: 10 },
});