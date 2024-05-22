import { GameState } from '../../islands/GameState.tsx';
import { DamageButton } from "../../islands/DamageButtons.tsx";



export default function Roulette() {
    
    return <>
        <GameState />
        <DamageButton target="player" />
    </>
}