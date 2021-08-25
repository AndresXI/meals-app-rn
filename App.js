import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import MealsNavigator from './navigation/MealsNavigator'

enableScreens()

const FetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={FetchFonts}
        onError={() => console.log('error')}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return (
    <SafeAreaProvider>
      <MealsNavigator />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})
