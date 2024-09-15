import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  openMenuPhone(event: MouseEvent) {
    event.preventDefault();
    const phoneMenu = document.querySelector('.phone-menu');

    if (phoneMenu) {
      if (phoneMenu.classList.contains("phone-menu-hidden")) {
          phoneMenu.classList.remove("phone-menu-hidden");
      } else {
          phoneMenu.classList.add("phone-menu-hidden");
      }
  }
  }

}
