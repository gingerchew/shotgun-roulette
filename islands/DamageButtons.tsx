import { Button } from "../components/Button.tsx";
import { InternalGameState } from './GameState.tsx';
import { batch } from "@preact/signals-core";

export function DamageButton({ target }: { target: 'player' | 'dealer' }) {
    
    const addDamage = () => {
        batch(() => {
            switch(target) {
                case 'player': {
                    const { playerHealth, ...state } = InternalGameState.value;
                    
                    InternalGameState.value = {
                        ...state,
                        playerHealth: playerHealth - 1
                    }
                    break;
                }
                case 'dealer': {
                    const { dealerHealth, ...state } = InternalGameState.value;
                    
                    InternalGameState.value = {
                        ...state,
                        dealerHealth: dealerHealth - 1,
                    }
                }
            }
        })
        console.log(InternalGameState.value);
    }

    return <div>
        <Button onClick={addDamage}>Damage Player</Button>
    </div>
}