import {Component} from '@angular/core';
import {Monster} from './model/monster.model';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {ArenaComponent} from './arena/arena.component';
import {MonsterListComponent} from './monster-list/monster-list.component';
import {FloatingFooterComponent} from './floating-footer/floating-footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MenuComponent, ArenaComponent, MonsterListComponent, FloatingFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nav = 'monsters';

  title = 'monster-arena';
  selectedLeftMonster?: Monster;
  selectedRightMonster?: Monster;

  monsters: Monster[] = [
    {
      name: 'Lavalak',
      img: 'double-dragon',
      element: 'FIRE',
      attacks: [
        {
          name: 'Fireball',
          element: 'FIRE',
          damage: 3,
          energyCost: 2
        },
        {
          name: 'Burn',
          element: 'FIRE',
          damage: 1,
          energyCost: 1
        },
      ],
      resistances: [
        'ICE'
      ],
      maxEnergy: 8,
      maxHealth: 10
    },
    {
      name: 'Slimolak',
      img: 'gooey-daemon',
      element: 'ACID',
      attacks: [
        {
          name: 'Splash',
          element: 'ACID',
          damage: 2,
          energyCost: 3
        }
      ],
      resistances: [],
      maxEnergy: 12,
      maxHealth: 8
    },
    {
      name: 'Tricelak',
      img: 'triceratops-head',
      element: 'ICE',
      attacks: [
        {
          name: 'Chill',
          element: 'ICE',
          damage: 1,
          energyCost: 1
        },
        {
          name: 'Blizzard',
          element: 'FIRE',
          damage: 5,
          energyCost: 6
        },
      ],
      resistances: [],
      maxEnergy: 7,
      maxHealth: 10
    }
  ];

  monsterSelected(monster: Monster) {
    const freshClonedMonster = {
      ...monster,
      currentEnergy: monster.maxEnergy,
      currentHealth: monster.maxHealth,
    }
    if (this.selectedLeftMonster == null) {
      this.selectedLeftMonster = freshClonedMonster;
    } else if (this.selectedRightMonster == null) {
      this.selectedRightMonster = freshClonedMonster;
    } else {
      window.alert('Arena already full!');
    }
  }
}
