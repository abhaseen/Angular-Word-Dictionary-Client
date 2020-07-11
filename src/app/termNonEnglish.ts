import { Definition } from './definition';

export interface TermNonEnglish {
  _id?: string;
  termEnglishId?: string;
  wordEnglish?: string;
  wordNonEnglish: string;
  wordExpanded?: string;
  languageCode?: string;
  image?: string;
  imageType?: string;
  audio?: string;
  audioType?: string;
  linkAuthoritative?: string;
  linkWikipedia?: string;
  linkYouTube?: string;
  authorName: string;
  dateCreated?: Date;
  dateRevised?: Date;
  fieldOfStudy: string;
  helpYes?: number;
  helpNo?: number;
  definitions: Definition[];
}
