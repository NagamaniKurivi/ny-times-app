import { Component, OnInit, Input } from '@angular/core';
import { Articles } from '../../models/articles.model';
import { Router, ActivatedRoute } from '@angular/router';

import { NyServiceService } from '../../../../core/services/ny-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  Articles: Articles;

  @Input('Articles')
  set ArticlesListDetail(ArticlesListData) {
    this.Articles = ArticlesListData;
  }

  constructor(
    private nyService: NyServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //
  }

  /**
   * openDetail
   */
  openDetail() {
    this.nyService.updateSelectedArticle(this.Articles);
    this.router.navigate(['../nydetail'], {relativeTo: this.route});
  }
}
