import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  tabAction(target: HTMLElement) {
    if (target.classList.contains("closed-faq-tab")){
      target.classList.remove("closed-faq-tab");
      target.classList.add("opened-faq-tab")
    } else {
      target.classList.add("closed-faq-tab");
      target.classList.remove("opened-faq-tab")
    }
  }
  openFaqTab(event : MouseEvent) {
    let target = event.target as HTMLElement; // Cast event.target as HTMLElement

    while (target) {
      console.log(target.classList)
      if (target.classList.contains("faq-dropdown-tab")) {
        this.tabAction(target);
        break;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}
