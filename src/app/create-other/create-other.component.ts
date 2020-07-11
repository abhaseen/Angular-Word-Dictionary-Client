import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TermNonEnglish } from '../termNonEnglish';
import { Language } from '../language';
import { TermEnglish } from '../termEnglish';

@Component({
  selector: 'app-create-other',
  templateUrl: './create-other.component.html',
  styleUrls: ['./create-other.component.css'],
})
export class CreateOtherComponent implements OnInit {
  languages: Language[];
  termEnglish: TermEnglish;
  termEnglishId: string;

  createTermOtherForm = this.fb.group({
    termEnglishId: [''],
    authorName: ['', Validators.required],
    wordNonEnglish: ['', Validators.required],
    languageCode: ['', Validators.required],
    wordExpanded: [''],
    fieldOfStudy: ['', Validators.required],
    definition: ['', Validators.required],
  });

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.termEnglishId = params['id'];
    });
    this.getAllLanguages();
    this.getOneEnglishTerm(this.termEnglishId);
  }

  getOneEnglishTerm(id: string): void {
    this.dataService
      .getOneEnglishTerm(id)
      .subscribe((term: TermEnglish) => (this.termEnglish = term));
  }

  addNewNonEnglishTerm(newTermData: TermNonEnglish): void {
    this.dataService.addNewNonEnglishTerm(newTermData).subscribe(() => {
      this.router.navigate([`/termsEnglish/detail/${this.termEnglishId}`]);
    });
  }

  onSaveClick(): void {
    const newNonEnglishTerm: TermNonEnglish = {
      wordEnglish: this.termEnglish.wordEnglish,
      languageCode: this.createTermOtherForm.value['languageCode'],
      authorName: this.createTermOtherForm.value['authorName'],
      wordNonEnglish: this.createTermOtherForm.value['wordNonEnglish'],
      wordExpanded: this.createTermOtherForm.value['wordExpanded'],
      fieldOfStudy: this.createTermOtherForm.value['fieldOfStudy'],
      definitions: [
        {
          authorName: this.createTermOtherForm.value['authorName'],
          definition: this.createTermOtherForm.value['definition'],
        },
      ],
    };

    newNonEnglishTerm.termEnglishId = this.termEnglishId;

    this.addNewNonEnglishTerm(newNonEnglishTerm);
  }

  getAllLanguages(): void {
    this.dataService
      .getAllLanguages()
      .subscribe((data) => (this.languages = data));
  }
}
