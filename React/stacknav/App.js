import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { AuthProvider, AuthContext } from './AuthContext';
import { LoginScreen, MainScreen, CalculadoraScreen, NombreScreen, GeneradorScreen } from './Screens';


const AuthenticatedApp = () => {
    const { userToken } = useContext(AuthContext);
    const [currentScreen, setCurrentScreen] = useState('Menu');
    // Mapa de pantallas
    const screenMap = {
        'Menu': <MainScreen setScreen={setCurrentScreen} />,
        'Calculadora': <CalculadoraScreen setScreen={setCurrentScreen} />,
        'Nombre': <NombreScreen setScreen={setCurrentScreen} />,
        'Generador': <GeneradorScreen setScreen={setCurrentScreen} />,
    };


    if (!userToken) {
        return <LoginScreen />;
    }


    return (
        <View style={styles.appContainer}>
            {screenMap[currentScreen]}
        </View>
    );
};

export default function App() {
    return (
        <AuthProvider>
            <StatusBar style="auto" />
            <RootNavigator />
        </AuthProvider>
    );
}

const RootNavigator = () => {
    const { userToken, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={{ fontSize: 18 }}>Cargando datos de sesión...</Text>
            </View>
        );
    }
    const isAuthenticated = userToken;

    return (
        <View style={styles.fullScreenContainer}>
            {isAuthenticated ? <AuthenticatedApp /> : <LoginScreen />}
        </View>
    );
};


const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});
