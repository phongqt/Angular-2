import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RootScopeService } from '../services/rootscope.service';

@Component({
  selector: 'header-component',
  templateUrl: 'app/views/header.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [RootScopeService]
})

export class HeaderComponent {
  constructor(private rootService:RootScopeService) {}
  selectLink(argument) {
    this.rootService.changeValue(argument);
    console.log(argument);
  }
}