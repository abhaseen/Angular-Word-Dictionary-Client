import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TermEnglish } from '../termEnglish';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createTermForm = this.fb.group({
    authorName: ['', Validators.required],
    wordEnglish: ['', Validators.required],
    wordExpanded: [''],
    fieldOfStudy: ['', Validators.required],
    definition: ['', Validators.required],
  });

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSaveClick(): void {
    console.log(this.createTermForm.value['authorName']);

    const newTermEnglish: TermEnglish = {
      authorName: this.createTermForm.value['authorName'],
      wordEnglish: this.createTermForm.value['wordEnglish'],
      wordExpanded: this.createTermForm.value['wordExpanded'],
      fieldOfStudy: this.createTermForm.value['fieldOfStudy'],
      definitions: [
        {
          authorName: this.createTermForm.value['authorName'],
          definition: this.createTermForm.value['definition'],
        },
      ],
    };

    this.addNewEnglishTerm(newTermEnglish);
  }

  addNewEnglishTerm(newTermData: TermEnglish): void {
    this.dataService.addNewEnglishTerm(newTermData).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
