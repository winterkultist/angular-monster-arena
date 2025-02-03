import {Component} from '@angular/core';
import {MonsterCardComponent} from "../monster/monster-card/monster-card.component";
import {Monster} from '../model/monster.model';
import {coinFlip, getRandomPossibleAttack, isKo} from './fight.helper';

@Component({
  selector: 'app-arena',
  imports: [
    MonsterCardComponent
  ],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.css'
})
export class ArenaComponent {

  leftMonster?: Monster;
  rightMonster?: Monster;

  waitingText = "WAITING...";
  fightInAction = true;
  combatLog: string[] = [];

  startAnimation() {
    setInterval(() => {
      this.waitingText = this.waitingText + ".";
      if (this.waitingText === 'WAITING....') {
        this.waitingText = 'WAITING';
      }
    }, 500)
  }

  fight() {
    this.fightInAction = false;
    if (this.leftMonster != null && this.rightMonster != null) {
      this.startFight();
    } else {
      window.alert('You need to have two monsters to fight!');
    }
  }

  private startFight() {
    this.fightOneRoundRecursively(coinFlip());
  }

  private fightOneRoundRecursively(leftAttacksNext: boolean) {
    if (leftAttacksNext) {
      this.attack(this.leftMonster!, this.rightMonster!);
    } else {
      this.attack(this.rightMonster!, this.leftMonster!);
    }
    if (!isKo(this.leftMonster!) && !isKo(this.rightMonster!)) {
      setTimeout(() => this.fightOneRoundRecursively(!leftAttacksNext), 500);
    }
  }

  private async attack(attacker: Monster, receiver: Monster) {
    const attack = getRandomPossibleAttack(attacker);
    if (attack != null) {
      this.combatLog.push(`${attacker.name} uses ${attack.name}!`);
      attacker.currentEnergy = Math.max((attacker.currentEnergy ?? 0) - attack.energyCost, 0);
      receiver.currentHealth = Math.max((receiver.currentHealth ?? 0) - attack.damage, 0);
    } else {
      this.combatLog.push(`${attacker.name} is exhausted!`);
      attacker.currentEnergy = Math.min((attacker.currentEnergy ?? 0) + 2, attacker.maxEnergy);
    }
  }
}
