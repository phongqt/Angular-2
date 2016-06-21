import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { NewsComponent } from './news.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { RootScopeService } from '../services/rootscope.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'home-component',
  templateUrl: 'app/views/home.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent, NewsComponent]
})
@RouteConfig([
  {
    path:'/',
    name: 'News',
    component: NewsComponent,
    useAsDefault: true
  }, {
    path:'/about',
    name: 'About',
    component: AboutComponent
  }, {
    path:'/contact',
    name: 'Contact',
    component: ContactComponent
  }
])
export class HomeComponent implements OnInit {
  item : string;
  subscription : Subscription;
  constructor(private rootService : RootScopeService, private router : Router) {
  }
  ngOnInit() {
    this.subscription = this.rootService.rootScopeItem$.subscribe(
      item => this.item = item);
    console.log(this.router.currentInstruction.component.routeName);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}