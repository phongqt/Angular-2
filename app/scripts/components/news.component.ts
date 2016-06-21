import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../class/article';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

@Component ({
  selector: 'news-component',
  templateUrl: 'app/views/article.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ArticleService]
})

export class NewsComponent implements OnInit{
  private errorMessage: string;
  private articles: Article[];
  private totalPage : number;
  private page:number = 1;
  private limit:number = 6;
  private isDisabledPrevious:boolean = true;
  private isDisabledNext:boolean = false;

  constructor (private articleService: ArticleService, private router : Router) {}

  ngOnInit() {
    this.getArticles();
    this.isDisabledNext = this.totalPage <= 1;
  }

  getArticles() {
    this.articleService.getArticles(this.page, this.limit)
                     .subscribe(res => {
                          this.articles = res.articles;
                          var total = res.totalRecords / this.limit;
                          this.totalPage = Math.floor(total) + (total != Math.floor(total) ? 1 : 0);
                      }, error =>  this.errorMessage = <any>error);
  }
  gotoNext() {
    this.isDisabledPrevious = false;
    this.page ++;
    this.isDisabledNext = this.page == this.totalPage;
    this.getArticles();
  }
  gotoPrevious() {
      this.page --;
      this.isDisabledPrevious = this.page == 1;
      this.isDisabledNext = false;
      this.getArticles();
  }
  // gotoArticleDetail(article: Article) {
  //     let link = ['ArticleDetail', { id: article.Id }];
  //     this.router.navigate(link);
  // }

}