import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { RootScopeService } from '../services/rootscope.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'home-component',
  templateUrl: 'app/views/home.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
  providers: [RootScopeService]
})

export class HomeComponent implements OnInit {
  item : string;
  subscription : Subscription;
  constructor(private router : Router, private rootService: RootScopeService) {
  }
  ngOnInit() {
    this.subscription = this.rootService.rootScopeItem$.subscribe(
      item => this.item = item);
    // console.log(this.router.currentInstruction.component.routeName);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}