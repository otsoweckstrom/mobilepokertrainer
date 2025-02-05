import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ title: 'Main Menu', headerShown: false }}
        />
        <Stack.Screen
          name='PokerScreen'
          options={{ title: 'Poker Game', headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  )
}
