import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { TermEnglish } from "./termEnglish";
import { Definition } from "./definition";
import { TermNonEnglish } from "./termNonEnglish";
import { Language } from "./language";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private baseUrl = "https://morning-thicket-05150.herokuapp.com";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  // Handle errors
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // English Routes

  getEnglishTerms(): Observable<TermEnglish[]> {
    return this.http
      .get<TermEnglish[]>(`${this.baseUrl}/api/terms/english`)
      .pipe(catchError(this.handleError<TermEnglish[]>("getEnglishTerms", [])));
  }

  getOneEnglishTerm(id: string): Observable<TermEnglish> {
    return this.http
      .get<TermEnglish>(`${this.baseUrl}/api/terms/english/${id}`)
      .pipe(
        catchError(this.handleError<TermEnglish>("getOneEnglishTerm", null))
      );
  }

  searchEnglishTerms(query: string): Observable<TermEnglish[]> {
    if (!query.trim()) {
      return of([]);
    }
    return this.http
      .get<TermEnglish[]>(`${this.baseUrl}/api/terms/english/search?q=${query}`)
      .pipe(
        catchError(this.handleError<TermEnglish[]>("searchEnglishTerms", []))
      );
  }

  addNewEnglishTerm(newTermObj: TermEnglish): Observable<TermEnglish> {
    return this.http
      .post<TermEnglish>(`${this.baseUrl}/api/terms/english`, newTermObj)
      .pipe(
        catchError(this.handleError<TermEnglish>("addNewEnglishTerm", null))
      );
  }

  addEnglishDefinition(id: string, def: Definition): Observable<Definition> {
    return this.http
      .put<Definition>(
        `${this.baseUrl}/api/terms/english/${id}/add-definition`,
        def
      )
      .pipe(
        catchError(this.handleError<Definition>("addEnglishDefinition", null))
      );
  }

  incrementEnglishLikes(termId: string, defId: Object): Observable<Object> {
    return this.http
      .put<Object>(
        `${this.baseUrl}/api/terms/english/definition-like/${termId}`,
        defId
      )
      .pipe(catchError(this.handleError<Object>("incrementEnglishLikes", {})));
  }

  incrementEnglishHelpYes(termId: string): Observable<null> {
    return this.http
      .put<null>(`${this.baseUrl}/api/terms/english/helpyes/${termId}`, null)
      .pipe(
        catchError(this.handleError<null>("incrementEnglishHelpYes", null))
      );
  }

  incrementEnglishHelpNo(termId: string): Observable<null> {
    return this.http
      .put<null>(`${this.baseUrl}/api/terms/english/helpno/${termId}`, null)
      .pipe(catchError(this.handleError<null>("incrementEnglishHelpNo", null)));
  }

  // Non-English Routes

  getNonEnglishTerms(): Observable<TermNonEnglish[]> {
    return this.http
      .get<TermNonEnglish[]>(`${this.baseUrl}/api/terms/other`)
      .pipe(
        catchError(this.handleError<TermNonEnglish[]>("getNonEnglishTerms", []))
      );
  }

  getOneNonEnglishTerm(termId: string): Observable<TermNonEnglish> {
    return this.http
      .get<TermNonEnglish>(`${this.baseUrl}/api/terms/other/${termId}`)
      .pipe(
        catchError(
          this.handleError<TermNonEnglish>("getOneNonEnglishTerm", null)
        )
      );
  }

  searchNonEnglishTermsById(query: string): Observable<TermNonEnglish[]> {
    if (!query.trim()) {
      return of([]);
    }
    return this.http
      .get<TermNonEnglish[]>(
        `${this.baseUrl}/api/terms/other/search?q=${query}`
      )
      .pipe(
        catchError(
          this.handleError<TermNonEnglish[]>("searchNonEnglishTermsById", [])
        )
      );
  }

  addNewNonEnglishTerm(newTermObj: TermNonEnglish): Observable<TermNonEnglish> {
    return this.http
      .post<TermNonEnglish>(`${this.baseUrl}/api/terms/other`, newTermObj)
      .pipe(
        catchError(
          this.handleError<TermNonEnglish>("addNewNonEnglishTerm", null)
        )
      );
  }

  addNonEnglishDefinition(id: string, def: Definition): Observable<Definition> {
    return this.http
      .put<Definition>(
        `${this.baseUrl}/api/terms/other/${id}/add-definition`,
        def
      )
      .pipe(
        catchError(
          this.handleError<Definition>("addNonEnglishDefinition", null)
        )
      );
  }

  incrementNonEnglishLikes(termId: string, defId: Object): Observable<Object> {
    return this.http
      .put<Object>(
        `${this.baseUrl}/api/terms/other/definition-like/${termId}`,
        defId
      )
      .pipe(
        catchError(this.handleError<Object>("incrementNonEnglishLikes", {}))
      );
  }

  incrementNonEnglishHelpYes(termId: string): Observable<null> {
    return this.http
      .put<null>(`${this.baseUrl}/api/terms/other/helpyes/${termId}`, null)
      .pipe(
        catchError(this.handleError<null>("incrementNonEnglishHelpYes", null))
      );
  }

  incrementNonEnglishHelpNo(termId: string): Observable<null> {
    return this.http
      .put<null>(`${this.baseUrl}/api/terms/other/helpno/${termId}`, null)
      .pipe(
        catchError(this.handleError<null>("incrementNonEnglishHelpNo", null))
      );
  }

  // Language Routes

  getAllLanguages(): Observable<Language[]> {
    return this.http
      .get<Language[]>(`${this.baseUrl}/api/languages`)
      .pipe(catchError(this.handleError<Language[]>("getAllLanguages", [])));
  }
}
