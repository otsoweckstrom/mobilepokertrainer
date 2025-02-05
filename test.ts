import { Table } from 'poker-ts'

// 1️⃣ Initialize table with 3 players and blinds
const table = new Table({ smallBlind: 50, bigBlind: 100 })

// 2️⃣ Players sit down with starting chips
table.sitDown(0, 1000) // Player 1
table.sitDown(1, 1000) // Player 2
table.sitDown(2, 1000) // Player 3

// 3️⃣ Start the hand (blinds are posted, hole cards dealt)
table.startHand()
console.log('Hand started!')

// 4️⃣ Pre-flop betting round
while (table.isBettingRoundInProgress()) {
  const seatIndex = table.playerToAct()
  console.log(`Player ${seatIndex + 1} to act.`)

  // Get legal actions for the current player
  const legalActions = table.legalActions().actions
  console.log(`Legal actions for Player ${seatIndex + 1}:`, legalActions)

  // Simulated action: All players call the big blind
  if (legalActions.includes('call')) {
    table.actionTaken('call')
  } else {
    table.actionTaken('check') // If checking is legal, check instead
  }
}

// End pre-flop betting
table.endBettingRound()
console.log('Pre-flop betting round ended.')

// 5️⃣ Deal the flop
console.log('Flop: ', table.communityCards())
