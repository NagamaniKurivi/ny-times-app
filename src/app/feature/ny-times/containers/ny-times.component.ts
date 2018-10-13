import { Component, OnInit } from '@angular/core';

import { ArticlesMetaData, ArticlesResults, Articles } from '../models/articles.model';

/**
 * NyTimesComponent
 */
@Component({
  selector: 'app-ny-times',
  templateUrl: './ny-times.component.html',
  styleUrls: ['./ny-times.component.css']
})
export class NyTimesComponent implements OnInit {
  articles: ArticlesResults;
  articlesList: Articles[];
  articlesMetaData = ArticlesMetaData;

  constructor(
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    //
  }

}
