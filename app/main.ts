import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './scripts/components/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import './scripts/rxjs-operators';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
