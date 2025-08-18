import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PartidosScreen from '../screens/partidosScreen';
import TablasScreen from '../screens/tablasScreen';
import FavoritosScreen from '../screens/favoritosScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Partidos"
            screenOptions={{
                headerStyle: { backgroundColor: '#007AFF' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen name="Partidos" component={PartidosScreen} />
            <Stack.Screen name="Tablas" component={TablasScreen} />
            <Stack.Screen name="Favoritos" component={FavoritosScreen} />
        </Stack.Navigator>
    );
}