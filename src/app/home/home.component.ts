import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TermEnglish } from '../termEnglish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  termEnglish: TermEnglish[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTerms();
  }

  getTerms(): void {
    this.dataService
      .getEnglishTerms()
      .subscribe((terms) => (this.termEnglish = terms));
  }
}
