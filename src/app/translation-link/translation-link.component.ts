import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Language } from '../language';

@Component({
  selector: 'app-translation-link',
  templateUrl: './translation-link.component.html',
  styleUrls: ['./translation-link.component.css'],
})
export class TranslationLinkComponent implements OnInit {
  @Input() nonEnglishTermId: string;
  @Input() langCode: string;
  langName: string;
  languages: Language[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllLanguages();
  }

  getAllLanguages(): void {
    this.dataService.getAllLanguages().subscribe((data: Language[]) => {
      this.languages = data;
      this.setLang();
    });
  }

  setLang(): void {
    this.langName = this.languages.find(
      (obj) => obj.code === this.langCode
    ).name;
  }
}
