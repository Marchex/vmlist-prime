import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,TabView,TabPanel} from 'primeng/primeng';
import {KvmHostComponent} from './kvmhost.component';

@Component({
    templateUrl: 'app/main.component.html',
    selector: 'my-app',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer, TabView,TabPanel, KvmHostComponent],
    providers: [HTTP_PROVIDERS]
})
export class MainComponent {
    
    constructor () {}
    
    
}