import { Component, OnInit } from '@angular/core';
import { TermEnglish } from '../termEnglish';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { TermNonEnglish } from '../termNonEnglish';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  termEnglish: TermEnglish;
  id: string;
  translationTerms: TermNonEnglish[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getOneEnglishTerm(this.id);
    this.searchNonEnglishTermsById(this.id);
  }

  getOneEnglishTerm(id: string): void {
    this.dataService
      .getOneEnglishTerm(id)
      .subscribe((term: TermEnglish) => (this.termEnglish = term));
  }

  searchNonEnglishTermsById(id: string): void {
    this.dataService
      .searchNonEnglishTermsById(id)
      .subscribe((term: TermNonEnglish[]) => (this.translationTerms = term));
  }
}
