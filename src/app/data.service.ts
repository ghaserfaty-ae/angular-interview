import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getOptions(): Observable<string[]> {
    // Simulate an asynchronous API call to fetch the options
    return of(['One', 'Two', 'Three']); // Replace with your actual data fetching logic
  }

  constructor() { }
}
