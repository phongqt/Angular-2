import { RouterConfig } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { AuthGuard } from '../providers/auth.guard';

export const AdminRoutes: RouterConfig = [
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
    // children: [
    //   {
    //     path: '',
    //     component: NewsComponent
    //   },
    //   {
    //     path: 'about',
    //     component: AboutComponent
    //   },
    //   {
    //     path: 'contact',
    //     component: ContactComponent
    //   },
    //   {
    //     path: 'detail/:alias',
    //     component: ArticleDetailComponent,
    //     canDeactivate: [CanDeactivateGuard]
    //   },
    // ]
  },
];

