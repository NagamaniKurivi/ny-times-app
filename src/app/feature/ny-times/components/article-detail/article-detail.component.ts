import { Component, OnInit } from '@angular/core';
import { NyServiceService } from '../../../../core/services/ny-service.service';
import { Articles, ArticlesMetaData } from '../../models/articles.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  selectedArticle: Articles;
  articlesMetaData = ArticlesMetaData;

  constructor(
    private nyService: NyServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.selectedArticle = this.nyService.getSelectedArticle();
  }

  /**
   * goBack
   */
  goBack() {
    this.nyService.updateSelectedArticle(null);
    this.router.navigate(['../nylist'], {relativeTo: this.route});
  }
}
