import {Component, Input} from '@angular/core';
import {Monster} from '../../model/monster.model';
import {AttackComponent} from '../attack/attack.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-monster-card',
  imports: [
    AttackComponent,
    NgClass
  ],
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.css'
})
export class MonsterCardComponent {

  @Input() monster: Monster | undefined;
  @Input() flipImage = false;

}
