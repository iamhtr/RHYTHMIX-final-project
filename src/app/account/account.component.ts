import { Component } from '@angular/core';
import { faUserCircle, faListAlt, faSignInAlt, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';




@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUserCircle, faListAlt, faTicket, faSignInAlt);
  }
}
