import {Component, Input} from '@angular/core';
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

  @Input() leftMonster?: Monster;
  @Input() rightMonster?: Monster;

  waitingText = "WAITING...";
  fightInAction = false;
  fightFinished = false;
  leftAttacksNext = coinFlip();
  combatLog: string[] = [];
  fightSound = new Audio("/sounds/fight.mp3");
  punchSound = new Audio("/sounds/punch.mp3");
  koSound = new Audio("/sounds/ko.mp3");
  regenSound = new Audio("sounds/regen.mp3");

  startAnimation() {
    setInterval(() => {
      this.waitingText = this.waitingText + ".";
      if (this.waitingText === 'WAITING....') {
        this.waitingText = 'WAITING';
      }
    }, 500)
  }

  fight() {
    if (this.leftMonster != null && this.rightMonster != null) {
      this.startFight();
    } else {
      window.alert('You need to have two monsters to fight!');
    }
  }

  private startFight() {
    this.fightInAction = true;
    this.animateFight();
    setInterval(() => {
      if (!this.fightFinished) {
        this.fightOneRound()
      }
    }, 1000);
  }

  private fightOneRound() {
    if (this.leftAttacksNext) {
      this.attack(this.leftMonster!, this.rightMonster!);
    } else {
      this.attack(this.rightMonster!, this.leftMonster!);
    }
    if (isKo(this.leftMonster!)) {
      this.combatLog.push(`${this.leftMonster!.name} is KNOCKED OUT!`);
      this.animateKo();
      this.fightFinished = true;
    } else if (isKo(this.rightMonster!)) {
      this.combatLog.push(`${this.rightMonster!.name} is knocked out!`);
      this.animateKo();
      this.fightFinished = true;
    }
    this.leftAttacksNext = !this.leftAttacksNext;
  }

  private async attack(attacker: Monster, receiver: Monster) {
    const attack = getRandomPossibleAttack(attacker);
    if (attack != null) {
      this.combatLog.push(`${attacker.name} uses ${attack.name}!`);
      this.animateHit();
      attacker.currentEnergy = Math.max((attacker.currentEnergy ?? 0) - attack.energyCost, 0);
      receiver.currentHealth = Math.max((receiver.currentHealth ?? 0) - attack.damage, 0);
    } else {
      this.combatLog.push(`${attacker.name} is exhausted!`);
      this.animateRegen();
      attacker.currentEnergy = Math.min((attacker.currentEnergy ?? 0) + 2, attacker.maxEnergy);
    }
  }

  private animateHit() {
    this.punchSound.load();
    this.punchSound.play();
  }

  private animateKo() {
    setTimeout(() => {
      this.koSound.play()
    }, 500);
  }

  private animateRegen() {
    this.regenSound.load();
    this.regenSound.play();
  }

  private animateFight() {
    this.fightSound.play();
  }
}
