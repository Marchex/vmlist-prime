import {bootstrap} from '@angular/platform-browser-dynamic';
import {KvmHostComponent} from './kvmhost.component';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import 'rxjs/Rx';

bootstrap(KvmHostComponent, [
    disableDeprecatedForms(),
    provideForms()
]);