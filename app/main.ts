import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './scripts/components/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import './scripts/rxjs-operators';
import { APP_ROUTER_PROVIDERS } from './scripts/routes/app.routes';

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);
