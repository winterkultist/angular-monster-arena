import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Output() navTo = new EventEmitter<string>();

  navToClicked(site: string) {
    this.navTo.emit(site);
  }
}
