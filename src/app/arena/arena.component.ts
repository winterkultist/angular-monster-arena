import {Component, Input} from '@angular/core';
import {MonsterCardComponent} from "../monster/monster-card/monster-card.component";
import {Monster} from '../model/monster.model';

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

  fightEnabled = true;

  fight() {
    this.fightEnabled = false;
  }

  startAnimation() {
    setInterval(() => {
      this.waitingText = this.waitingText + ".";
      if (this.waitingText === 'WAITING....') {
        this.waitingText = 'WAITING';
      }
    }, 500)
  }
}
