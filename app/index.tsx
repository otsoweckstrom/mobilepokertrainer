import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function MainMenu() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>
      <Button
        title='Start Poker Game'
        onPress={() => router.push('/PokerScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  title: { fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 20 },
})
