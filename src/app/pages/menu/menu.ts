import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BURGERS } from '../../core/data/burgers';
import { BurgerCardComponent } from '../../shared/burger-card/burger-card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, BurgerCardComponent],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  burgers = BURGERS;
}