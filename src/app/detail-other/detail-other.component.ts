import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { TermNonEnglish } from '../termNonEnglish';
import { Language } from '../language';

@Component({
  selector: 'app-detail-other',
  templateUrl: './detail-other.component.html',
  styleUrls: ['./detail-other.component.css'],
})
export class DetailOtherComponent implements OnInit {
  termNonEnglish: TermNonEnglish;
  id: string;
  languages: Language[];
  langCode: string;
  langName: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getOneNonEnglishTerm(this.id);
    this.getAllLanguages();
  }

  getOneNonEnglishTerm(id: string): void {
    this.dataService
      .getOneNonEnglishTerm(id)
      .subscribe((term: TermNonEnglish) => {
        this.termNonEnglish = term;
        this.langCode = this.termNonEnglish.languageCode;
      });
  }

  getAllLanguages(): void {
    this.dataService.getAllLanguages().subscribe((data: Language[]) => {
      this.languages = data;
      this.setLangName();
    });
  }

  setLangName(): void {
    this.langName = this.languages.find(
      (obj) => obj.code === this.langCode
    ).name;
  }
}
