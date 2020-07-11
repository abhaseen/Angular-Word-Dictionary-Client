import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TermNonEnglish } from '../termNonEnglish';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Definition } from '../definition';
import { Language } from '../language';

@Component({
  selector: 'app-add-definition-other',
  templateUrl: './add-definition-other.component.html',
  styleUrls: ['./add-definition-other.component.css'],
})
export class AddDefinitionOtherComponent implements OnInit {
  termNonEnglish: TermNonEnglish;
  termId: string;
  languages: Language[];
  langCode: string;
  langName: string;

  addDefinitionOtherForm = this.fb.group({
    authorName: ['', Validators.required],
    definition: ['', Validators.required],
  });

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.termId = params['id'];
    });
    this.getOneNonEnglishTerm(this.termId);
    this.getAllLanguages();
  }

  onSaveClick(): void {
    const newDefinition: Definition = this.addDefinitionOtherForm.value;
    this.addNonEnglishDefinition(newDefinition);
  }

  getOneNonEnglishTerm(id: string): void {
    this.dataService
      .getOneNonEnglishTerm(id)
      .subscribe((term: TermNonEnglish) => {
        this.termNonEnglish = term;
        this.langCode = this.termNonEnglish.languageCode;
      });
  }

  addNonEnglishDefinition(def: Definition): void {
    this.dataService.addNonEnglishDefinition(this.termId, def).subscribe(() => {
      this.router.navigate([`/termsOther/detail/${this.termId}`]);
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
