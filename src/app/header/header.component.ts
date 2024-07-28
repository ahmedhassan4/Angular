import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainMenuComponent, TopMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
