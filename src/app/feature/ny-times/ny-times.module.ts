import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { NyTimesComponent } from './containers/ny-times.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

const COMPONENTS = [NyTimesComponent, ArticlesListComponent, ArticleComponent, ArticleDetailComponent];

/**
 * NyTimesModule Feature Module
 */
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: 'ny', component: NyTimesComponent,
        children: [
          {
            path: 'nylist', component: ArticlesListComponent
          },
          {
            path: 'nydetail', component: ArticleDetailComponent
          },
          {
            path: '', redirectTo: 'nylist', pathMatch: 'full'
          }
        ],
      },
      {
        path: '', redirectTo: 'ny', pathMatch: 'full',
      },
    ]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class NyTimesModule { }
