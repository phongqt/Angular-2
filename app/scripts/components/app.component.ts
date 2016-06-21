import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { RootScopeService } from '../services/rootscope.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/views/main.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
