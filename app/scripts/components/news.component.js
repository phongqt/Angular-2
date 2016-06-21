"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_service_1 = require('../services/article.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var NewsComponent = (function () {
    function NewsComponent(articleService, router) {
        this.articleService = articleService;
        this.router = router;
        this.page = 1;
        this.limit = 6;
        this.isDisabledPrevious = true;
        this.isDisabledNext = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getArticles();
        this.isDisabledNext = this.totalPage <= 1;
    };
    NewsComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles(this.page, this.limit)
            .subscribe(function (res) {
            _this.articles = res.articles;
            var total = res.totalRecords / _this.limit;
            _this.totalPage = Math.floor(total) + (total != Math.floor(total) ? 1 : 0);
        }, function (error) { return _this.errorMessage = error; });
    };
    NewsComponent.prototype.gotoNext = function () {
        this.isDisabledPrevious = false;
        this.page++;
        this.isDisabledNext = this.page == this.totalPage;
        this.getArticles();
    };
    NewsComponent.prototype.gotoPrevious = function () {
        this.page--;
        this.isDisabledPrevious = this.page == 1;
        this.isDisabledNext = false;
        this.getArticles();
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'news-component',
            templateUrl: 'app/views/article.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, router_deprecated_1.Router])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map