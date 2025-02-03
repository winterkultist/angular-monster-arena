import {Component, Input} from '@angular/core';
import {Monster} from '../../model/monster.model';

@Component({
  selector: 'app-monster-card',
  imports: [],
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.css'
})
export class MonsterCardComponent {

  @Input({required: true}) monster!: Monster;
  @Input() flipImage = false;

}
