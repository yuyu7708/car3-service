import { Component } from '@angular/core';
import { CookieService } from 'support/angular/services/cookie/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car3c-server';

  constructor(private cookieService: CookieService) {
    console.log(cookieService.key('test').set('hello').value);
  }
}
