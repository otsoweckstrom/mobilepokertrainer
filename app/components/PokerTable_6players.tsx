import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function PokerUI() {
  return (
    <View style={styles.container}>
      {/* Poker Table (Centered) */}

      <View style={styles.table}>
        {/* Player Positions Around Table */}
        <View style={[styles.player, styles.topPlayer]} />
        <View style={[styles.player, styles.topLeftPlayer]} />
        <View style={[styles.player, styles.topRightPlayer]} />
        <View style={[styles.player, styles.bottomLeftPlayer]} />
        <View style={[styles.player, styles.bottomRightPlayer]} />
        <View style={[styles.player, styles.mainPlayer]} />

        {/* Community Cards */}
        <View style={styles.communityCards}>
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Fold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Raise</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  tableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    width: 340,
    height: '60%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 20,
  },
  player: {
    width: 70,
    height: 70,
    borderRadius: 200,
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#666',
    position: 'absolute',
  },
  topPlayer: { top: -35, left: '50%', marginLeft: -35 },
  topLeftPlayer: { top: 90, left: -35 },
  topRightPlayer: { top: 90, right: -35 },
  bottomLeftPlayer: { bottom: 90, left: -35 },
  bottomRightPlayer: { bottom: 90, right: -35 },
  mainPlayer: { bottom: -35, left: '50%', marginLeft: -35 },
  communityCards: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  card: {
    width: 40,
    height: 60,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#999',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 50,
    backgroundColor: '#777',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
