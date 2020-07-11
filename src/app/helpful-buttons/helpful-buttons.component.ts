import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-helpful-buttons',
  templateUrl: './helpful-buttons.component.html',
  styleUrls: ['./helpful-buttons.component.css'],
})
export class HelpfulButtonsComponent implements OnInit {
  @Input() yesCount: number;
  @Input() noCount: number;
  @Input() termId: string;
  @Input() nonEnglish: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  yesButtonClick(): void {
    this.yesCount++;

    if (this.nonEnglish) {
      this.incrementNonEnglishHelpYes(this.termId);
    } else {
      this.incrementEnglishHelpYes(this.termId);
    }
  }

  noButtonClick(): void {
    this.noCount++;

    if (this.nonEnglish) {
      this.incrementNonEnglishHelpNo(this.termId);
    } else {
      this.incrementEnglishHelpNo(this.termId);
    }
  }

  incrementEnglishHelpYes(termId: string): void {
    this.dataService.incrementEnglishHelpYes(termId).subscribe();
  }

  incrementEnglishHelpNo(termId: string): void {
    this.dataService.incrementEnglishHelpNo(termId).subscribe();
  }

  incrementNonEnglishHelpYes(termId: string): void {
    this.dataService.incrementNonEnglishHelpYes(termId).subscribe();
  }

  incrementNonEnglishHelpNo(termId: string): void {
    this.dataService.incrementNonEnglishHelpNo(termId).subscribe();
  }
}
