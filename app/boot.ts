import {bootstrap} from '@angular/platform-browser-dynamic';
import {MainComponent} from './main.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import 'rxjs/Rx';

bootstrap(MainComponent, [
    disableDeprecatedForms(),
    provideForms()
]);