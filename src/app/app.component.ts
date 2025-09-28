import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientComponent } from "./components/http-client/http-client.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HttpClientComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularssr';
}
