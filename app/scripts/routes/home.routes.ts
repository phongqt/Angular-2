import { RouterConfig } from '@angular/router';
import { HomeComponent } from '../components/home.component';
import { NewsComponent } from '../components/news.component';
import { AboutComponent } from '../components/about.component';
import { ContactComponent } from '../components/contact.component';
import { ArticleDetailComponent } from '../components/article.detail.component';

export const HomeRoutes: RouterConfig = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: NewsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'detail/:alias',
        component: ArticleDetailComponent
      },
    ]
  },
];

