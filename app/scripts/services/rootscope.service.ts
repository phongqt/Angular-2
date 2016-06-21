import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class RootScopeService {
  private rootItem = new BehaviorSubject<string>('');
  rootScopeItem$ = this.rootItem.asObservable();
  changeValue(string) {
    this.rootItem.next(string);
  }
}