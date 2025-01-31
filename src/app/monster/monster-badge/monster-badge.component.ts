import {Component, Input} from '@angular/core';
import {Monster} from '../../model/monster.model';

@Component({
  selector: 'app-monster-badge',
  imports: [],
  templateUrl: './monster-badge.component.html',
  styleUrl: './monster-badge.component.css'
})
export class MonsterBadgeComponent {

  @Input({required: true}) monster!: Monster;

}
