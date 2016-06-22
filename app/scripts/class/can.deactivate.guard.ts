import { CanDeactivate } from '@angular/router';
import { CanComponentDeactivate } from '../interfaces/ican.component.deactive';
import { Observable } from 'rxjs/Observable';

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}