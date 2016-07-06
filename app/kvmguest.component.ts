import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {KvmGuest} from './kvmhosts/kvmguest';
import {KvmGuestService} from './kvmhosts/kvmguestservice';


@Component({
    templateUrl: 'app/kvmguest.component.html',
    selector: 'kvm-guests',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer],
    providers: [HTTP_PROVIDERS,KvmGuestService]
})
export class KvmGuestComponent {

    kvmguests: KvmGuest[];
    cols:  any[];

    constructor(private kvmguestService: KvmGuestService) {}

    ngOnInit() {
        this.kvmguestService.getKvmGuests().then(s => this.kvmguests = s);

        this.cols = [
            {field: 'chef_server', header: 'Chef Server'},
            {field: 'kvmhostname', header: 'KVM Host'},
            {field: 'index_name', header: 'Name'},
            {field: 'state', header: 'State'},
            {field: 'cpus', header: 'Total CPUs'},
            {field: 'memmax', header: 'Used Mem'}

        ];
    }
}