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

  monsters: Monster[] = [{
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
    maxEnergy: 12,
    maxHealth: 10,
    currentHealth: 10,
    currentEnergy: 12
  },
    {
      name: 'Slimolak',
      img: 'gooey-daemon',
      element: 'ACID',
      attacks: [
        {
          name: 'Splash',
          element: 'ACID',
          damage: 3,
          energyCost: 3
        }
      ],
      resistances: [],
      maxEnergy: 14,
      maxHealth: 12,
      currentHealth: 12,
      currentEnergy: 14
    }];
}
