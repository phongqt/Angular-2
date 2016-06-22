import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { DialogService } from '../services/dialog.service';
import { Article } from '../class/article';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'article-detail-component',
  templateUrl: 'app/views/article-detail.html',
  providers: [ArticleService, DialogService]
})
export class ArticleDetailComponent implements OnInit {
  private article: Article;
  private sub: any;
  private errorMessage: string;
  
  constructor(private dialogService: DialogService, private router: Router, private activeRoute: ActivatedRoute, private articleService: ArticleService) { }
  
  ngOnInit() {
    this.sub = this.activeRoute.params.subscribe(params => {
     let alias = params['alias'];
     this.articleService.getArticleByAlias(alias).subscribe(res => {
      this.article = res;
     }, error =>  this.errorMessage = <any>error);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Unchanged
    // if (!this.crisis || this.crisis.name === this.editName) {
    //   return true;
    // }
    
    let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);
    return o;
  }
}