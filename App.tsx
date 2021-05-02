import React, { useEffect } from 'react';
import AppLoanding from 'expo-app-loading'
import * as Notifications from 'expo-notifications'
import Routes from './src/routes';
import { 
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold

 } from '@expo-google-fonts/jost'
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
   

  }, [])

  if (!fontsLoaded)
    return <AppLoanding />

  return (
    <Routes />
  )
}

