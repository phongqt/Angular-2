import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin/admin.component';
import { RootScopeService } from '../services/rootscope.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/views/main.html',
  directives: [ROUTER_DIRECTIVES, HomeComponent, AdminComponent],
  providers: [
    ROUTER_PROVIDERS, RootScopeService
  ]
})
@RouteConfig([
  {
    path: '/...',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/admin/...',
    name: 'Admin',
    component: AdminComponent
  }
])
export class AppComponent { }
