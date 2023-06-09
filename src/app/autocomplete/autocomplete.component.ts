import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map, filter } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit{
  myControl = new FormControl('');
  options: string[] | undefined;
  filteredOptions!: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

    this.dataService.getOptions().subscribe(options => {
      this.options = options;
    });
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.options ? this.options.filter(option => option.toLowerCase().includes(filterValue)) : [];
  }
}
