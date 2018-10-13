import { Component, OnInit, Input } from '@angular/core';

import { Articles, ArticlesResults, ArticlesMetaData } from '../../models/articles.model';
import { NyServiceService, RequestType } from '../../../../core/services/ny-service.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  // ArticlesList: Articles[];

  // @Input('ArticlesList')
  // set ArticlesListDetail(ArticlesListData) {
  //   this.ArticlesList = ArticlesListData;
  // }

  articles: ArticlesResults;
  articlesList: Articles[];
  articlesMetaData = ArticlesMetaData;

  constructor(
    private nyService: NyServiceService,
  ) { }

  /**
   * on init
   */
  ngOnInit() {
    this.nyService.getArticles(this.articlesMetaData.url, RequestType.get, this.articlesMetaData.apiKey)
    .subscribe((article: ArticlesResults) => {
      console.log(article);
      this.articles = article;
      this.articlesList = article.results;
    });
  }

}
