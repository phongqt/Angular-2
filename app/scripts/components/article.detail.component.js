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
var router_1 = require('@angular/router');
var article_service_1 = require('../services/article.service');
var dialog_service_1 = require('../services/dialog.service');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromPromise');
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(dialogService, router, activeRoute, articleService) {
        this.dialogService = dialogService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.articleService = articleService;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            var alias = params['alias'];
            _this.articleService.getArticleByAlias(alias).subscribe(function (res) {
                _this.article = res;
            }, function (error) { return _this.errorMessage = error; });
        });
    };
    ArticleDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ArticleDetailComponent.prototype.canDeactivate = function () {
        // Unchanged
        // if (!this.crisis || this.crisis.name === this.editName) {
        //   return true;
        // }
        var p = this.dialogService.confirm('Discard changes?');
        var o = Observable_1.Observable.fromPromise(p);
        return o;
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: 'article-detail-component',
            templateUrl: 'app/views/article-detail.html',
            providers: [article_service_1.ArticleService, dialog_service_1.DialogService]
        }), 
        __metadata('design:paramtypes', [dialog_service_1.DialogService, router_1.Router, router_1.ActivatedRoute, article_service_1.ArticleService])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article.detail.component.js.map