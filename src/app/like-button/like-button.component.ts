import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent implements OnInit {
  @Input() likes: number;
  @Input() termId: string;
  @Input() defId: string;
  @Input() nonEnglish: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  likeButtonClick(): void {
    this.likes++;

    if (this.nonEnglish) {
      this.incrementNonEnglishLikes({ defId: this.defId });
    } else {
      this.incrementEnglishLikes({ defId: this.defId });
    }
  }

  incrementEnglishLikes(defId: Object): void {
    this.dataService.incrementEnglishLikes(this.termId, defId).subscribe();
  }

  incrementNonEnglishLikes(defId: Object): void {
    this.dataService.incrementNonEnglishLikes(this.termId, defId).subscribe();
  }
}
