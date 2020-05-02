import { Component } from '@angular/core';
// for the chrome background script
import { BackgroundService } from '@services/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tvSleuth';

  constructor(
    // for the chrome background script
    private backgroundService: BackgroundService
  ) {
  }
}
