import {Monster} from '../model/monster.model';


export function isKo(monster: Monster): boolean {
  return (monster.currentHealth ?? 0) <= 0;
}

export function coinFlip(): boolean {
  return Math.random() > 0.5;
}

export function getRandomPossibleAttack(monster: Monster) {
  const shuffledAttacks = shuffleArray(monster.attacks)
  for (const attack of shuffledAttacks) {
    if (attack.energyCost <= (monster.currentEnergy ?? 0)) {
      return attack
    }
  }
  return null
}

function shuffleArray<T>(array: T[]) {
  let clone = structuredClone(array)
  for (var i = clone.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = clone[i]
    clone[i] = clone[j]
    clone[j] = temp
  }
  return clone
}
