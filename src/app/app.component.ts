import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }
`]
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'demo-app';
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
