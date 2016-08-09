import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS} from '@angular/http';
import {LocationService} from './location/location.service';

bootstrap(AppComponent, [HTTP_PROVIDERS, LocationService]);
