import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function WNavbLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'eventos/index') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'marketplace/index') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'reservas/index') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'perfil/index') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={24} color={color} />;
                },
                tabBarActiveTintColor: '#044a59', // Active icon and label color
                tabBarInactiveTintColor: '#8E8E93', // Inactive icon and label color
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderTopColor: '#f0f0f0',
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                    elevation: 5, // Add shadow for Android
                    shadowColor: '#000', // Add shadow for iOS
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 4,
                },
                headerShown: false, // Hide the default header
            })}
        >
            <Tabs.Screen
                name="eventos/index"
                options={{
                    title: 'Eventos',
                }}
            />
            <Tabs.Screen
                name="marketplace/index"
                options={{
                    title: 'Marketplace',
                }}
            />
            <Tabs.Screen
                name="reservas/index"
                options={{
                    title: 'Reservas',
                }}
            />
            <Tabs.Screen
                name="perfil/index"
                options={{
                    title: 'Perfil',
                }}
            />
        </Tabs>
    );
}
