"use strict";
var home_component_1 = require('../components/home.component');
var news_component_1 = require('../components/news.component');
var about_component_1 = require('../components/about.component');
var contact_component_1 = require('../components/contact.component');
var article_detail_component_1 = require('../components/article.detail.component');
var can_deactivate_guard_1 = require('../class/can.deactivate.guard');
exports.HomeRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: news_component_1.NewsComponent
            },
            {
                path: 'about',
                component: about_component_1.AboutComponent
            },
            {
                path: 'contact',
                component: contact_component_1.ContactComponent
            },
            {
                path: 'detail/:alias',
                component: article_detail_component_1.ArticleDetailComponent,
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
            },
        ]
    },
];
//# sourceMappingURL=home.routes.js.map