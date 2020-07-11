import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TermEnglish } from '../termEnglish';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Definition } from '../definition';

@Component({
  selector: 'app-add-definition',
  templateUrl: './add-definition.component.html',
  styleUrls: ['./add-definition.component.css'],
})
export class AddDefinitionComponent implements OnInit {
  termEnglish: TermEnglish;
  termId: string;

  addDefinitionForm = this.fb.group({
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
    this.getOneEnglishTerm(this.termId);
  }

  getOneEnglishTerm(id: string): void {
    this.dataService
      .getOneEnglishTerm(id)
      .subscribe((term: TermEnglish) => (this.termEnglish = term));
  }

  onSaveClick(): void {
    const newDefinition: Definition = this.addDefinitionForm.value;
    this.addEnglishDefinition(newDefinition);
  }

  addEnglishDefinition(def: Definition): void {
    this.dataService.addEnglishDefinition(this.termId, def).subscribe(() => {
      this.router.navigate([`/termsEnglish/detail/${this.termId}`]);
    });
  }
}
