import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { of as observableOf, Observable, throwError, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { Articles } from '../../feature/ny-times/models/articles.model';

export enum RequestType {
  get = 'get',
  post = 'post',
}

@Injectable()
export class NyServiceService {
  private selectedArticle: Articles;

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get Articles
   */
  getArticles(url, type, params): Observable<any> {
    const httpParams = new HttpParams().set('api-key', params);

    if (type === RequestType.get) {
      return this.http.get(url, {params: httpParams}).pipe(
        catchError((_e) => {
          return observableOf(null);
        }),
        map((data) => {
          return data;
        }),
        filter((data) => data != null),
      );
    }
    return;
  }

  /**
   * save selected article
   * @param article updateSelectedArticle
   */
  updateSelectedArticle(article) {
    this.selectedArticle = article;
  }

  /**
   * getSelectedArticle
   */
  getSelectedArticle() {
    return this.selectedArticle;
  }
}
