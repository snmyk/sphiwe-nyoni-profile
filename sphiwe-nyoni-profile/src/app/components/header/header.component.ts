import { Component } from '@angular/core';
import { NavLink } from '../../models/nav-link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor() {}
  isOpen = false;
  showSideMenu = false;

  navLinks: NavLink[] = [
    { name: 'About', url: '/about' },
    { name: 'Skills', url: '/skills' },
    { name: 'Experience', url: '/experience' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' },
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.showSideMenu = !this.showSideMenu;
  }
}
