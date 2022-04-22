import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siges';
  showOptionsClients: boolean = false;
  showLogo: boolean = true;

  showClients() {
    this.showOptionsClients = !this.showOptionsClients;
  }
  disableLogo() {
    this.showLogo = !this.showLogo;
  }
}
