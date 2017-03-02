import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <matt-todolist></matt-todolist>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Matt';
}
