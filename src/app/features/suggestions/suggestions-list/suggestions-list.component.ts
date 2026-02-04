import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestions-list',
  templateUrl: './suggestions-list.component.html'
})
export class SuggestionsListComponent {
  suggestions = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Spring Boot' },
    { id: 3, name: 'Docker' }
  ];
}
