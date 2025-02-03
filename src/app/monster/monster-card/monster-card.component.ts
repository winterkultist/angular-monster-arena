import {Component, Input} from '@angular/core';
import {Monster} from '../../model/monster.model';
import {AttackComponent} from '../attack/attack.component';

@Component({
  selector: 'app-monster-card',
  imports: [
    AttackComponent
  ],
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.css'
})
export class MonsterCardComponent {

  @Input({required: true}) monster!: Monster;
  @Input() flipImage = false;

}
