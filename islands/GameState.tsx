import { signal } from '@preact/signals-core';

const maxHealth = 5;
export const InternalGameState = signal({
    maxHealth,
    playerHealth: maxHealth,
    dealerHealth: maxHealth,
    turn: 1
})

export function GameState() {
    const { maxHealth, playerHealth, dealerHealth, turn } = InternalGameState.value;
    return <ul>
        <li>Max: {maxHealth}</li>
        <li>Player: {playerHealth}</li>
        <li>Dealer: {dealerHealth}</li>
        <li>Turn: {turn > 0 ? 'Player' : 'Dealer'}</li>
    </ul>
}