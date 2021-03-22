import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackHeaderLeftButtonProps, StackNavigationOptions } from '@react-navigation/stack';

import StartScreen from '../components/StartScreen';
import GameScreen from '../components/GameScreen';

const startScreenOptions:StackNavigationOptions = {
    title: 'Start Puzzle 3072',
    headerStyle: {
        backgroundColor: '#990077'
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

const gameScreenOptions:StackNavigationOptions = {
    title: 'Puzzle 3072 Board',
    headerStyle: {
        backgroundColor: '#990077'
    },
    headerLeft: (props: StackHeaderLeftButtonProps) => null,
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

const Stack = createStackNavigator();

export default () => <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} options={startScreenOptions} />
        <Stack.Screen name="Game" component={GameScreen} options={gameScreenOptions} />
    </Stack.Navigator>
</NavigationContainer>