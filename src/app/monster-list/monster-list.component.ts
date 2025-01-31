import {Component, Input} from '@angular/core';
import {Monster} from '../model/monster.model';
import {MonsterBadgeComponent} from '../monster/monster-badge/monster-badge.component';

@Component({
  selector: 'app-monster-list',
  imports: [
    MonsterBadgeComponent
  ],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {

  @Input() monsters: Monster[] = [];

  sendToArena(monster: Monster) {
    
  }
}
